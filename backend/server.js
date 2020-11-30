import express from 'express';
import cors from 'cors'
import data from './data';
import boxes from './boxes'
var bodyParser = require('body-parser')
const dotenv = require('dotenv')
const Order = require('./models/order')
dotenv.config()

const Easypost = require('@easypost/api');
const api = new Easypost(process.env.EASYPOST_KEY);

const path = require('path');
require('./database/mongoose')
const app = express();
app.use(cors())
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(urlencodedParser)
app.use(jsonParser)

const PORT = process.env.PORT || 5000;

app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = data.products.find(x => x._id === productId);
  if (product)
    res.send(product);
  else
    res.status(404).send({ msg: "Product Not Found." })

});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/api/products/cart/", (req, res) => {
  res.send(data.products);
});

const stripe = require('stripe')(process.env.STRIPE_KEY);

app.post('/api/create-coupon', async (req, res) => {
  const { coupon_type, duration, name, currency, duration_in_months, amount, percent_off } = req.body

  try {
    const coupon_obj = {
      "duration": duration,
      "name": name,
      "currency": currency ? currency : "usd",
      "duration_in_months": duration === "repeating" ? duration_in_months : null,
    }
    if (coupon_type === "on_amount") {
      coupon_obj.amount_off = amount
    }
    else {
      coupon_obj.percent_off = percent_off
    }
    const coupon = await stripe.coupons.create(coupon_obj);
    if (coupon) {
      res.status(200).send({ message: "coupon generated", coupon: coupon })
    }
    else {
      res.status(400).send({ message: "error in generating coupon", error: "invalid coupon!" })
    }
  } catch (error) {
    console.log("error in genrating coupon", error)
    res.status(401).send({ message: "error in generating coupon", error: error.message })
  }

})

app.post('/api/create-promotion', async (req, res) => {
  const { coupon_id, code } = req.body

  try {
    if (!coupon_id || !code) {
      res.status(401).send({ message: "error generating promo code", error: "coupon_id and promo code are required!" })
    }
    const promo_obj = {
      coupon: coupon_id,
      code
    }

    const promotionCode = await stripe.promotionCodes.create(promo_obj)

    if (promotionCode) {
      res.status(200).send({ message: "promoCode generated", promoCode: promotionCode })
    }
    res.status(401).send({ message: "error generating promo code", error: "invalid coupon id" })
  }
  catch (error) {
    res.status(401).send({ message: "error generating promo code", error: error.message })

  }

})
const checkForFreeItems = (cartItems) => {
  const is25pc = cartItems.find(item => {
    return item.price_data.product_data.name === 'Ravya Turmeric Infusion 25pc'
  })
  if (is25pc) {
    cartItems.push({
      "price_data": {
        "currency": "usd",
        "product_data": {
          "name": "Free Ravya Turmeric Infusion 15pc",
          "images": [
            "https://i.ibb.co/6t92wwt/New15pc.jpg"
          ]
        },
        "unit_amount": 0
      },
      "quantity": 2
    })
    return cartItems
  }
  return cartItems
}

app.post('/create-session', async (req, res) => {
  try {
    // console.log("SESSION BODY", JSON.stringify(req.body.cartItems))
    const { cartItems, order } = req.body
    // const shipmentOrder = await Order.findById(order)
    const cart = checkForFreeItems(cartItems)
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: cart,
      mode: 'payment',
      allow_promotion_codes: true,
      success_url: `${"https://www.ravya.ca/home/products"}?success=true`,
      cancel_url: `${"https://www.ravya.ca/home/products"}?canceled=true`,

    });
    const shipmentOrder = await Order.findByIdAndUpdate({ _id: order }, { session_id: session.id })
    console.log("order in session", shipmentOrder)
    res.json({ id: session.id });
  } catch (error) {
    console.log("error in session create", error)
    res.json(401).send({ message: "error in creating stripe session", err })
  }

});

const getParcelDimensions = (cart) => {
  const weights = []
  cart.map(item => {
    weights.push({ product: item.product, totalWeight: item.qty * item.weight })
  })
  const totalQuantity = cart.reduce((a, c) => a + c.qty, 0)
  const totalParcelWeight = parseFloat(weights.reduce((a, c) => a + c.totalWeight, 0).toFixed(1))
  console.log("WEIGHTS", weights)
  console.log("TOTAL PARCEL WEIGTH", totalParcelWeight, totalQuantity)
  if (totalQuantity <= 3) {
    return {
      weight: totalParcelWeight,
      ...boxes.small,
    }
  }
  if (totalQuantity <= 5) {
    return {
      weight: totalParcelWeight,
      ...boxes.medium,
    }
  }
  if (totalQuantity <= 10) {
    return {
      weight: totalParcelWeight,
      ...boxes.large,
    }
  }
}
app.post('/api/create-customs_item', async (req, res) => {
  const { customs_item } = req.body
  const customsItem = new api.CustomsItem({
    description: customs_item.description,
    quantity: customs_item.quantity,
    value: customs_item.value,
    weight: customs_item.weight,
    hs_tariff_number: customs_item.hs_tariff_number,
    origin_country: customs_item.origin_country
  });

  customsItem.save().then((customs_item) => {
    console.log("CUSTOM ITEM", customs_item)
    res.status(200).send(customs_item)
  }).catch(err => {
    console.log("ERROR IN CUSTOM ITEM ", err)
    res.status(400).send({ message: "ERROR IN CREATING CUSOTM ITEM!", err })
  });
})

const generateLocalShipment = async (to_address, cartItems, res) => {
  const shipment = new api.Shipment({
    to_address: {
      'name': to_address.name,
      'email': to_address.email,
      'phone': to_address.phone,
      'street1': to_address.address,
      'street2': to_address.street,
      'city': to_address.city,
      'state': to_address.state,
      'zip': to_address.zip,
      'country': to_address.country,
      'residential': to_address.residential === 'residential' ? true : false
    },
    from_address: {
      'company': 'Ravya',
      'street1': '110 Acorn Place',
      'street2': '5th Floor',
      'city': 'Mississauga',
      'state': 'Ontario',
      'zip': 'L4Z3N4',
      'country': 'CA',
      'phone': '613-400-4395'
    },
    parcel: {
      'length': 7,
      'width': 7,
      'height': 7,
      'weight': 5.36164
    }
   // parcel: getParcelDimensions(cartItems)
  });

  shipment.save().then(async () => {
    try {
      console.log("SHIPMENT", shipment)
      console.log("SHIPMENT RATE", shipment.lowestRate())
      const order = await Order({ shipment_id: shipment.id, selected_rate: shipment.lowestRate() }).save()
      console.log("order", order)
      res.send({ shipmentFee: shipment.lowestRate().rate, order: order._id })
    } catch (error) {
      console.log('shipment create error', error)
    }

    // res.send({ shipmentFee:shipment})
    // shipment.rates.forEach(rate => {
    //   console.log(rate.carrier);
    //   console.log(rate.service);
    //   console.log(rate.rate);
    //   console.log(rate.id);
    // console.log(shipment)
    // res.send({ shipmentFee:shipment})
    // });

    //////////////// buy shipment /////////////
    // const selectedShipment = shipment.rates.find(rate => rate.service === 'RegularParcel')
    // console.log("selectedShipment", selectedShipment)
    // shipment.buy(shipment.lowestRate(), selectedShipment.rate)
    //   .then(() => {
    //     console.log("BUY SHIPMENT", shipment)
    //     res.send({ shipmentFee: shipment.selected_rate.rate })
    //   }
    //   ).catch(err => {
    //     console.log("BUY ERROR", err)
    //     res.status(401).send({ message: "some thing went wrong", err })
    //   });
  }).catch(err => {
    console.log("SHIPMENT ERROR", err)
    res.status(401).send({ message: "some thing went wrong", err })
  });
}

const generateCustomItems = (cart) => {
  const myItems = []
  data.customItems.map(customsItem => {
    cart.forEach(item => {
      if (item.name === customsItem.description) {
        myItems.push(customsItem)
      }
    })

  })
  return myItems
}
const generateInternationalShipment = (to_address, cartItems, res) => {
  console.log("CUSTOM ITEMS", generateCustomItems(cartItems))
  const items = generateCustomItems(cartItems)
  if (!items?.length) {
    return res.status(400).send({ message: "unable to get custom info for selected item!" })
  }
  const customsInfo = new api.CustomsInfo({
    eel_pfc: 'NOEEI 30.37(a)',
    customs_certify: true,
    customs_signer: 'Mohammed Soubaneh',
    contents_type: 'merchandise',
    customs_items: items
  })
  customsInfo.save().then(customs_info => {
    const shipment = new api.Shipment({
      to_address: {
        'name': to_address.name,
        'email': to_address.email,
        'phone': to_address.phone,
        'street1': to_address.address,
        'street2': to_address.street,
        'city': to_address.city,
        'state': to_address.state,
        'zip': to_address.zip,
        'country': to_address.country,
        'residential': to_address.residential === 'residential' ? true : false
      },
      from_address: {
        'company': 'Ravya',
        'street1': '110 Acorn Place',
        'city': 'Mississauga',
        'state': 'Ontario',
        'zip': 'L4Z 3N4',
        'country': 'CA',
        'phone': '613-400-4395'
      },
      parcel: {
        'length': 7,
        'width': 7,
        'height': 7,
        'weight': 5.36164
      },
      // parcel: getParcelDimensions(cartItems),
      customs_info: customs_info
    });

    shipment.save().then(async () => {
      try {
        console.log("SHIPMENT", shipment)
        console.log("SHIPMENT RATE", shipment.lowestRate())
        const order = await Order({ shipment_id: shipment.id, selected_rate: shipment.lowestRate() }).save()
        console.log("order", order)
        res.send({ shipmentFee: shipment.lowestRate().rate, order: order._id })
      } catch (error) {
        console.log('shipment create error', error)
      }
    }).catch(err => {
      console.log("SHIPMENT ERROR", err)
      res.status(401).send({ message: "some thing went wrong", err })
    });
  }).catch(err => {
    console.log("CUSTOMS INFO ERROR", err)
    res.status(401).send({ message: "some thing went wrong", err })
  });
}
app.post('/api/create-shipment', async (req, res) => {
  console.log(req.body.to_address)
  const { to_address, cartItems } = req.body
  if (to_address.country === 'CA') {
    return generateLocalShipment(to_address, cartItems, res)
  }
  else {
    generateInternationalShipment(to_address, cartItems, res)
  }

})
// shipment.postage_label.label_url, shipment.tracking_code
// app.get('/api/get-orders', async (req, res) => {
//   try {
//     const { status } = req.query
//     console.log("get orders",status)
//     const shipmentOrders = await Order.find({ payment_status: status })
//     res.send({ orders: shipmentOrders })
//   } catch (error) {
//     res.status(500).send({ message: "error in getting orders", error })
//   }
// })

app.post('/api/buy-shipment', async (req, res) => {
  try {
    const { stripe_session } = req.body
    const shipmentOrder = await Order.findOne({ session_id: stripe_session })
    const shipment = await api.Shipment.retrieve(shipmentOrder.shipment_id)
    shipment.buy(shipment.lowestRate())
      .then(async (shipment) => {
        console.log("BUY SHIPMENT", shipment)
        if (shipment) {
          shipmentOrder.postage_label = shipment.postage_label
          shipmentOrder.payment_status = "paid"
          await shipmentOrder.save()
          res.send({ shipment })
        }
      }
      ).catch(err => {
        console.log("BUY ERROR", err)
        res.status(401).send({ message: "some thing went wrong", err })
      });
  } catch (error) {

  }
})

app.use(express.static(path.join(__dirname, '/../frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
});

app.listen(PORT, () => { console.log(`Server started at ${PORT}`) });
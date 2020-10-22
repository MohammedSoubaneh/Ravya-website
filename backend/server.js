import express from 'express';
import cors from 'cors'
import data from './data';
import boxes from './boxes'
var bodyParser = require('body-parser')

const Easypost = require('@easypost/api');
const api = new Easypost('EZTKeb57177d069a415b85711f53625a2edf009A8rRwysF0ma8tsdguiA');

const path = require('path');
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

const stripe = require('stripe')("sk_test_51HLEnyGLtWDqx1qOWBvKR2GMVhO50m9WJA3IQr2j0Yj6eJG028G7SrndLuvJIe1B9wQltDMU4bn8pi42xSTfMyok00gW15982r");

app.post('/create-session', async (req, res) => {
  console.log("SESSION BODY", JSON.stringify(req.body.cartItems))
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: req.body.cartItems,
    mode: 'payment',
    success_url: `${"https://ravya.herokuapp.com/home/products"}?success=true`,
    cancel_url: `${"https://ravya.herokuapp.com/home/products"}?canceled=true`,

  });

  res.json({ id: session.id });

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
  if(totalQuantity <= 5){
    return {
      weight:totalParcelWeight,
      ...boxes.small,
    }
  }
  if(totalQuantity <= 10){
    return {
      weight:totalParcelWeight,
      ...boxes.medium,
    }
  }
  if(totalQuantity <= 15){
    return {
      weight:totalParcelWeight,
      ...boxes.large,
    }
  }
}
app.post('/api/create-shipment', async (req, res) => {
  console.log(req.body.to_address)
  const { to_address, cartItems } = req.body
  // console.log("FINAL PARCEL",getParcelDimensions(cartItems))
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
      'country': 'CA',
      'residential': to_address.residential === 'residential' ? true : false
    },
    from_address: {
      'company': 'Ravya',
      'street1': '45 Rue Saint-Jacques',
      'street2': '5th Floor',
      'city': 'Gatineau',
      'state': 'Quebec',
      'zip': 'J8X0B6',
      'country': 'CA',
      'phone': '415-528-7555'
    },
    // parcel: {
    //   'length': 9,
    //   'width': 6,
    //   'height': 2,
    //   'weight': 10
    // }
    parcel: getParcelDimensions(cartItems)
  });

  shipment.save().then(() => {
    console.log("SHIPMENT", shipment)
    // res.send({ shipmentFee:shipment})
    // shipment.rates.forEach(rate => {
    //   console.log(rate.carrier);
    //   console.log(rate.service);
    //   console.log(rate.rate);
    //   console.log(rate.id);
      // console.log(shipment)
      // res.send({ shipmentFee:shipment})
    // });
    const selectedShipment = shipment.rates.find(rate=> rate.service === 'RegularParcel' )
    console.log("selectedShipment" , selectedShipment)
    shipment.buy(shipment.lowestRate(), selectedShipment.rate)
      .then(() => {
        console.log("BUY SHIPMENT",shipment)
        res.send({ shipmentFee: shipment.selected_rate.rate })
      }
      ).catch(err => {
        console.log("BUY ERROR", err)
        res.status(401).send({ message: "some thing went wrong", err })
      });
  }).catch(err => {
    console.log("SHIPMENT ERROR", err)
    res.status(401).send({ message: "some thing went wrong", err })
  });
})
// shipment.postage_label.label_url, shipment.tracking_code


app.use(express.static(path.join(__dirname, '/../frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
});

app.listen(PORT, () => { console.log(`Server started at ${PORT}`) });
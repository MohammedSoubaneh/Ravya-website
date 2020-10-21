import express from 'express';
import cors from 'cors'
import data from './data';
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
  // console.log("SESSION BODY", JSON.stringify(req.body.cartItems))
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: req.body.cartItems,
    mode: 'payment',
    success_url: `${"https://ravya.herokuapp.com/home/products"}?success=true`,
    cancel_url: `${"https://ravya.herokuapp.com/home/products"}?canceled=true`,

  });

  res.json({ id: session.id });

});

// to_address: {
//   'name': 'George Costanza',
//   'company': 'Vandelay Industries',
//   'street1': '1 E 161st St.',
//   'city': 'Bronx',
//   'state': 'NY',
//   'zip': '10451'
// },
app.post('/api/create-shipment', async (req, res) => {
  console.log(req.body.to_address)
  const shipment = new api.Shipment({
    to_address: {
      'name': req.body.to_address.name,
      'email':req.body.to_address.email,
      'phone':req.body.to_address.phone,
      'object': req.body.to_address.address,
      'street1': req.body.to_address.street,
      'city': req.body.to_address.city,
      'state': req.body.to_address.state,
      'zip': req.body.to_address.zip,
      'country':'CA',
      'residential':req.body.to_address.residential === 'residential' ? true : false
    },
    from_address: {
      'company': 'Ravya',
      'street1': '1204  St-Jerome Street',
      'street2': '5th Floor',
      'city': 'St Jerome',
      'state': 'Quebec',
      'zip': 'S4P 3Y2',
      'country':'CA',
      'phone': '415-528-7555'
    },
    parcel: {
      'length': 9,
      'width': 6,
      'height': 2,
      'weight': 10
    }
  });

  shipment.save().then(() => {
    console.log("SHIPMENT", shipment)
    res.send({ shipmentFee:shipment})
    shipment.rates.forEach(rate => {
      console.log(rate.carrier);
      console.log(rate.service);
      console.log(rate.rate);
      console.log(rate.id);
      console.log(shipment)
        res.send({ shipmentFee:shipment})
    });

    // shipment.buy(shipment.lowestRate(['USPS'], ['First']))
    //   .then(() => {
    //     console.log(shipment.fees[1].amount)
    //     res.send({ shipmentFee:shipment.fees[1].amount })
    //   }
    //   );
  });
})
// shipment.postage_label.label_url, shipment.tracking_code


app.use(express.static(path.join(__dirname, '/../frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
});

app.listen(PORT, () => { console.log(`Server started at ${PORT}`) });
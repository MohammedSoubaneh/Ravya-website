import express from 'express';
import cors from 'cors'
import data from './data';
var bodyParser = require('body-parser')
 
 


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
    if(product)
    res.send(product);
    else 
        res.status(404).send({msg: "Product Not Found."})

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
app.use(express.static(path.join(__dirname, '/../frontend/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
  });

app.listen(PORT, () => { console.log(`Server started at ${PORT}`)});
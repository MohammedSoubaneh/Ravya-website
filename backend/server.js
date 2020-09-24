import express from 'express';
import data from './data';




const app  = express();
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

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('ravya-website/frontend/build'))
}

app.listen(PORT, () => { console.log(`Server started at ${PORT}`)});

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:ravya%40dm%21n@ravya.kl4xo.mongodb.net/ravya_db?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
const mongoose = require('mongoose');


const orderSchema = mongoose.Schema({

    shipment_id:{
        type:String,
        unique:true

    },
    session_id:{
        type:String,
        },
    selected_rate:{
        type:Object,
    },
    payment_status:{
        type:String,
        required:true,
        default:"unpaid"
    }, 
    postage_label:{
        type:Object,
    },                                                                             
})


const Orders = mongoose.model('Orders' , orderSchema)

module.exports=Orders
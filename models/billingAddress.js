const mongoose = require('mongoose');
const config = require('../config/database');


const BillingAddressSchema = mongoose.Schema({
    firstName: {
        type: String,required: true
    },
    lastName:{
        type:String,required: true
    },
    email:{
        type:String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    address2: {
        type: String,
        required: true
    },

    state:{
        type:String,required: true
    },

    city:{
        type:String,required: true
    },

    zip:{
        type:String,required: true
    },

    country:{
        type:String,required: true
    },


});


const BillingAddress = module.exports = mongoose.model('BillingAddress', BillingAddressSchema);
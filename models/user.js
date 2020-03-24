const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coffeeSchema = new Schema({
    size : {
        type : Number,
        required : true,
    },
    price : {
        type : Number,
        required : true
    }
},{
    timestamps : true,
});

const userSchema = new Schema({
    name : {
        type : String,
        required : true,
    },
    picture : {
        type : String
    },
    expense : {
        type : Number
    },
    limitOfExpense : {
        type : Number,
        required : true
    },
    numberOfCoffee : {
        type : Number,
    },
    limitOfCoffee : {
        type : Number,
        required : true,
    },
    coffees : [coffeeSchema],
    groups : [{
        type : Schema.Types.ObjectId,
        ref : 'Group'
    }]

},{
    timestamps : true,
});

module.exports = mongoose.model('User', userSchema);
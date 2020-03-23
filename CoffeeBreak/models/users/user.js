const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coffeeSchema = new Schema({
    size : {
        type : [1, 2, 3],
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
    coffee : [coffeeSchema],
    group : {
        type : Schema.Types.ObjectId,
        ref : 'Group'
    }

},{
    timestamps : true,
});

module.exports = mongoose.model('User', userSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const postSchema = new Schema({
    user : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    content : {
        type : String
    },
    picture : {
        type : String
    }
},{
    timestamps : true
})
const groupSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    users : [{
        type : Schema.Types.ObjectId,
        ref : 'User'
    }],
    post : [postSchema]
},{
    timestamps : true,
})



const Group = mongoose.model('Group', groupSchema);
module.exports = Group;
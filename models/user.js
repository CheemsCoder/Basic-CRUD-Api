const mongoose = require('mongoose')

const timestamps=require('mongoose-timestamp');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const userSchema = new mongoose.Schema({
    name: {type: String},
    img: {type:String},
    summary: {type:String}
})

userSchema.plugin(AutoIncrement, {inc_field: 'user_id'});
userSchema.plugin(timestamps);

const User = mongoose.model('User', userSchema)
module.exports = User
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var mySchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]
});

mySchema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('User', mySchema);


var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var mySchema = new Schema({
    content: {type: String, required: true},
    user:  {type: Schema.Types.ObjectId,ref: 'Message'}
});

module.exports = mongoose.model('Message', mySchema);


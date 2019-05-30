var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var magicSchema = new Schema({
    index: { type: String, required: true },
    text:  { type :String, required: true }
});

var Magic = mongoose.model('Magic', magicSchema);
module.exports = Magic;
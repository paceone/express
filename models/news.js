var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
  title:  {type: String, require: true},
  description:   {type: String, require: true},
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('News' , newsSchema);
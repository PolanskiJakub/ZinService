var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
login: {type: String, required: true, maxLength: 200},
password: {type: String, required: true, maxLength: 200}        
})

module.exports = mongoose.model('User', UserSchema);
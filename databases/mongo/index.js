
const { mongo } = require('../../configs');
let mongoose = require('mongoose');
mongoose.connect(mongo.url);

module.exports = mongoose


const configs = require('../../configs');

module.exports = (req, res, next) => {
  res.locals = configs;
  next();
}

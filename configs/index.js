
module.exports = {
  app_title: process.env.APP_TITLE,
  mongo: {
    url: `mongodb://${process.env.APP_DOMAIN}:${process.env.APP_PORT}/${process.env.MONGO_DATABASE}`
  }
}

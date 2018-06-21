const mongoose = require("mongoose")
mongoose.set("debug", true)
mongoose.Promise = Promise
mongoose.connect("mongodb://mongo/db", {
  keepAlive: true,
  useMongoClient: true
})

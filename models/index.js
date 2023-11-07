require('dotenv').config()
const mongoose = require('mongoose')

const connect = async () => {
  await mongoose.connect(process.env.MONGO_URI)
  console.log("database connected")
}

connect()

module.exports.Place = require('./places')
module.exports.Comment = require('./comment')
// var platesArray = [
//   {
//     name: 'Taco Salad',
//     category: 'TexMEX',
//     price: 9.99
//   },
//   {
//     name: 'Smoothie',
//     category: 'LowCarb',
//     price: 15.11
//   }
// ]

var mongoose = require('mongoose')

var plateSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number
})

var Plate = mongoose.model('Plate',plateSchema)
// EXPORT PLATE
module.exports = Plate

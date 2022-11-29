const mongoose = require("mongoose")

const fruitSchema = new mongoose.Schema({
  name: {type: String, required: true},
  color: {type: String, required: true},
  readyToEat: Boolean
},
{
  timestamps: true
})

const Fruit = mongoose.model("Fruit", fruitSchema)

module.exports = Fruit
// const fruits = [

//     {
//         name: 'apple',
//         color: 'red',
//         readyToEat: true
//     },
//     {
//         name: 'pear',
//         color: 'green',
//         readyToEat: false
//     },
//     {
//         name: 'banana',
//         color: 'yellow',
//         readyToEat: true
//     }
// ];

// module.exports = fruits

//npm install express-react-views react react-dom --save 
//installed that
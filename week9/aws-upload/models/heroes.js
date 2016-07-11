var mongoose = require('mongoose');

var heroSchema = mongoose.Schema({

    name        : {type : String},
    gender      : String,
    powers      : Array,
    archEnemy   : {
        type : mongoose.Schema.ObjectId,
        ref  : 'Hero'
    },
    vitality    : Number,
    HQ          : String,
    costume     : {type : String, default : ''} // => http://mybucket.aws.com/costume.jpg

})

var Hero = mongoose.model('Hero', heroSchema)

module.exports = Hero
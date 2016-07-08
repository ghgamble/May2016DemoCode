var mongoose = require('mongoose');

var heroSchema = mongoose.Schema({

    name        : String,
    gender      : String,
    powers      : Array,
    archEnemy   : {
        type : mongoose.Schema.ObjectId,
        ref  : 'Hero'
    },
    vitality    : Number,
    HQ          : String

})

var Hero = mongoose.model('Hero', heroSchema)

module.exports = Hero
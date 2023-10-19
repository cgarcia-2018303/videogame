'use strict'

const mongoose = require('mongoose')

const videojuegoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
        
    },
    description: {
        type: String,
        required: true
    }
},{
    versionKey: false
});

module.exports = mongoose.model('Videojuego', videojuegoSchema );
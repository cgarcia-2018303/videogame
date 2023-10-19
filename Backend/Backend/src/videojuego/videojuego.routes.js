'use strict'

const express = require('express');
const api = express.Router();
const videojuegoController= require('./videojuego.controller');

api.get('/get', videojuegoController.get)
api.get('/getId/:id',  videojuegoController.getById)
api.post('/add', videojuegoController.add)
api.put('/update/:id',  videojuegoController.update)
api.delete('/delete/:id',  videojuegoController.delete)
module.exports = api;
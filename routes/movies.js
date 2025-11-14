const express = require('express');
const Router = express.Router();
const movieController = require('../controllers/movieController')
    ;
//Sostituisco app con Router, tolgo l'endpoint //
//Rotta index
Router.get('/', movieController.index)
//Rotta show
Router.get('/:id', movieController.show)

module.exports = Router; 

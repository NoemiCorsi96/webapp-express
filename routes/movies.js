const express = require('express');
const Router = express.Router();
const connection = require('../database/connection');
//Sostituisco app con Router, tolgo l'endpoint //
Router.get('/', (req, res) => {
    const sql = 'SELECT * FROM web_app.movies';
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ movie: results });
    })
})

Router.get('/:id', (req, res) => {
    const sql = 'SELECT * FROM movies WHERE id=?';
    const reviewSql = 'SELECT * FROM reviews WHERE movie_id =?';
    const movieId = Number(req.params.id);
    console.log(sql, movieId);
    connection.query(sql, [movieId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        connection.query(reviewSql, [movieId], (reviewsErr, reviewsResults) => {
            if (reviewsErr) return res.status(500).json({ error: reviewsErr.message });
            const thisMovie = { ...results[0], reviews: reviewsResults };
            res.json(thisMovie);
        })

    })
})

module.exports = Router; 

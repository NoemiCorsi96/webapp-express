const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const connection = require('./database/connection');
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    res.json({ message: 'ciao' });
})
//Preparo una rotta index per ottenere la lista dei film//
app.get('/api/movies', (req, res) => {
    const sql = 'SELECT * FROM web_app.movies';
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ movie: results });
    })
})
//Preparouna rotta show per ottenere i dettagli di un singolo film e le sue recensioni//
app.get('/api/movies/:id', (req, res) => {
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
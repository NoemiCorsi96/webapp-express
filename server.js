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
//Prepariamo una rotta index per ottenere la lista dei film//
app.get('/api/movies', (req, res) => {
    const sql = 'SELECT * FROM web_app.movies';
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ movie: results });
    })
})

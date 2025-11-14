const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const moviesRouter = require('./routes/movies')

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    res.json({ message: 'ciao' });
})
app.use('/api/movies', moviesRouter);

//Middleware per errore 404
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });

})


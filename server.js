const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const moviesRouter = require('./routes/movies')
const notFound = require('./middleware/notFound');
const serverError = require('./middleware/serverError');
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    res.json({ message: 'ciao' });
})
app.use('/api/movies', moviesRouter);



app.use(serverError);
app.use(notFound);

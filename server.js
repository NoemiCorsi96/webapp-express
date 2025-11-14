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

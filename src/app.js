require('dotenv').config();
require('../db.connection');
const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

app.get('/', async (req, res) => {
    const teste = await runQuery(`describe database`);

    res.send(teste);
})

app.get('/usuarios', (req, res) => {

});



app.listen(port, () => console.log('App running on port http://localhost:' + port));
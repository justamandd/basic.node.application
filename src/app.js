require('dotenv').config();
require('../db.connection');
const express = require('express');
const app = express();
const port = 8080;

const usuariosController = require('./controllers/usuarios.controller');

app.use(express.json());

app.get('/', async (req, res) => {
    res.send('Você está acessando a API!');
})

app.get('/usuarios', async (req, res, next) => {
    try {
        const usuarios = await usuariosController.list('usuario').then(res => res);

        res.send(usuarios.rows);    
    } catch (error) {
        next(error)
    }
});

app.get('/usuarios/:nome', async (req, res, next) => {
    const { nome } = req.params;

    try {
        const usuario = await usuariosController.search('usuario', nome).then(res => res);

        res.send(usuario.rows[0]);    
    } catch (error) {
        next(error)
    }
});

app.post('/usuarios', async (req, res, next) => {
    const { id, nome } = req.body;

    try {
        const usuario = await usuariosController.insert('usuario', { id, nome }).then(res => res);
        
        res.send(usuario.rows[0]);
    } catch (error) {
        
    }

});

app.put('/usuarios/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { nome } = req.body;

        const usuario = await usuariosController.update('usuario', { id, nome }).then(res => res);

        res.send(usuario.rows[0]);
    } catch (error) {
        next(error);
    }
});

app.delete('/usuarios/:id', async (req, res, next) => {
    try {
        const { id } = req.params;

        const usuario = await usuariosController.delete('usuario', id).then(res => res);

        res.send(usuario);
    } catch (error) {
        next(error);
    }
})



app.listen(port, () => console.log('App running on port http://localhost:' + port));
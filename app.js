const express = require('express');
const path = require('path');
require('dotenv').config();
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(express.static('client/build'))

app.get('/api/youtube', (req, res, next) => {
    res.send({
        msg: 'Hello les gars'
    })
})
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(process.env.PORT, () => {
    console.log(`Le serveur est lancé sur le port ${process.env.PORT}`)

});

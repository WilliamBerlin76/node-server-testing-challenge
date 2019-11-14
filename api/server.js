const express = require("express");

const Species = require('../species/speciesModel.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up', environment: process.env.DB_ENV})
});

server.post('/species', (req, res) => {
    const body = req.body;
    Species.insert(body)
        .then(name => {
            res.status(201).json(name)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})
module.exports = server;
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
});

server.get('/species', (req, res) => {
    Species.getAll()
        .then(species => {
            res.status(200).json(species)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

server.delete('/species/:id', (req, res) => {
    const id = req.params.id;
    Species.remove(id)
        .then(species => {
            res.status(200).json({message: `the species with the id ${id} was deleted`})
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})
module.exports = server;
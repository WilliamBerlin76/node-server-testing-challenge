const express = require("express");

const Species = require('../species/speciesModel.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up', environment: process.env.DB_ENV})
});

module.exports = server;
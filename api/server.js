const express = require('express');
const cors = require('cors');


const server = express();


server.use(cors());
server.use('/', (req, res) => res.send("app up and running"));


module.exports = server;
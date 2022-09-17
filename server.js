import config from "./config.js";

import express from "express";
import http from "http";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.listen(config.PORT, ()=>{
    console.log("corriendo en ", config.PORT);
})
//RUTAS

app.use(function(req, res, next) {
    res.status(404).send('Sorry cant find that!');
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
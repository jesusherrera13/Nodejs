const express = require('express');

const routerMatematicas = express.Router();
const {matematicas} = require('../datos/cursos.js').infoCursos;

routerMatematicas.get('/', function(req, res) {
    res.send(JSON.stringify(matematicas));
});

routerMatematicas.get('/:tema', function(req, res) {

    const tema = req.params.tema;
    const resultados = matematicas.filter(curso => curso.tema === tema);

    if(resultados.length === 0) {
        res.status(404).send(`No se encontraron cursos de ${tema}`);
        return;
    }

    if(req.query.ordenar === 'vistas') {
        return res.send(JSON.stringify(resultados.sort((a, b) => b.vistas - a.vistas)));
    }

    res.send(JSON.stringify(resultados));
});

routerMatematicas.get('/:tema/:nivel', function(req, res) {

    const tema = req.params.tema;
    const nivel = req.params.nivel;
    const resultados = matematicas.filter(curso => curso.tema === tema &&  curso.nivel === nivel);

    if(resultados.length === 0) {
        res.status(404).send(`No se encontraron cursos de ${tema}`);
        return;
    }

    if(req.query.ordenar === 'vistas') {
        return res.send(JSON.stringify(resultados.sort((a, b) => b.vistas - a.vistas)));
    }

    res.send(JSON.stringify(resultados));
});

module.exports = routerMatematicas;
import express from "express";
import { pool } from './db.js';
import { PORT } from './config.js';

const app = express();

app.get('/', async (req, res) => {
    const result = await pool.query("select * from clientes");
    res.json(result[0]);
});

app.get('/ping', async (req, res) => {
    const result = await pool.query(`select "hola mundo" as result`);
    console.log(result);
    res.json(result[0][0]);
});

app.get('/create', async (req, res) => {
    const {nombre} = req.query;
    const cliente = { nombre };
    const result = await pool.query(`insert into clientes set ?`, cliente);
    res.json(result);
});

app.get('/show/:id', async (req, res) => {
    const {nombre} = req.query;
    const cliente = { nombre };
    const result = await pool.query(`insert into clientes set ?`, cliente);
    res.json(result);
});

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});

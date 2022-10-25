import { getConnection } from '../database/database';

const index = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("select * from lenguajes");
        console.log(result);
        res.json(result);
    }
    catch(error) {
        res.status(500);
        res.send(error.message);
    }
}

const create = async (req, res) => {
    try {
        const { nombre, vistas} = req.body;
        
        if(nombre === undefined || vistas === undefined) res.status(400).json({message: "Envie los datos completos"});

        const connection = await getConnection();
        const lenguaje = { nombre, vistas };
        const result = await connection.query("insert into lenguajes set ?", lenguaje);
        console.log(result);
        res.send(result)
    }
    catch(error) {
        res.status(500);
        res.send(error.message);
    }
}

const show = async (req, res) => {
    try {
        const connection = await getConnection();
        const { id } = req.params;
        const result = await connection.query("select * from lenguajes where id=?", id); 
        res.send(result);
    }
    catch(error) {
        res.status(500);
        res.send(error.message);
    }
}

const update = async (req, res) => {
    try {
        const connection = await getConnection();
        const { id } = req.params;
        const { nombre, vistas } = req.body;

        if(id === undefined || nombre === undefined || vistas === undefined) res.status(400).json({message: "Envie los datos completos"});

        const lenguaje = { nombre, vistas };
        const result = await connection.query("update lenguajes set ? where id = ?", [lenguaje, id]); 
        res.send(result);
    }
    catch(error) {
        res.status(500);
        res.send(error.message);
    }
}

const destroy = async (req, res) => {
    try {
        const connection = await getConnection();
        const { id } = req.params;
        const result = await connection.query("delete from lenguajes where id=?", id);
        res.send(result);
    } 
    catch(error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methods = {
    index: index,
    create: create,
    show: show,
    update: update,
    destroy: destroy
}
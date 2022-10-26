import { getConnection } from '../database/database';

const index = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("select * from todos");
        console.log(result);
        res.json(result);
    } 
    catch(error) {
        res.status(500);
        res.send(error.message);
    }
}

const store = async (req, res) => {
    try {
        const connection = await getConnection();
        const { todo } = req.body;

        if(todo === undefined) req.status(400).json({ message: "Escriba el todo"});

        const created_at = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
        const row = { todo, created_at };
        const result = await connection.query("insert into todos set ?", row);
        console.log(result);
        res.send(result);
    } 
    catch (error) {
        res.status = 500;
        res.send(error);    
    }
}

const show = async (req, res) => {
    try {
        const connection = await getConnection();
        const { id } =  req.params;

        if(id === undefined) res.status(400).json({ message: "Indique el ID" });

        const result = await connection.query("select * from todos where id = ?", id);
        console.log(result);
        res.json(result);
    }
    catch(error) {
        res.status = 500;
        res.send(error);
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { todo, done } = req.body;
        
        if(id === undefined || todo === undefined) res.status(400).json({ message: "Indique el ID" });

        const connection = await getConnection();
        const updated_at = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
        const row = { todo, done, updated_at };
        const result = await connection.query("update todos set ? where id= ?", [row, id]);
        res.json(result);
    } 
    catch (error) {
        res.status = 500;
        res.send(error);
    }
}

const destroy = async (req, res) => {
    try {
        const connection = getConnection();
        const { id } = req.params;
        if(id === undefined) res.status(400).json({ message: "Indique el ID"});
        const result = connection.query("delete from todos where id = ?", id);
        res.json(result);
    } catch (error) {
        res.status = 500;
        res.send(error);
    }
}

module.exports = {
    index,
    store,
    show,
    update,
    destroy
}
import express from "express";
import morgan from "morgan";
import todoRouter from './routes/todo.routes';

const app = express();

app.set('port', 3000);
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/todo', todoRouter);

export default app;
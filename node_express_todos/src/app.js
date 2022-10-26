import express from "express";
import morgan from "morgan";
import v1TodoRouter from './v1/routes/todoRoutes';

const app = express();

app.set('port', 3000);
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1/todo', v1TodoRouter);

export default app;
import express from "express";
import morgan from "morgan";
import peliculasRoutes from './routes/peliculas.routes';

const app = express();

// Settings
app.set('port', 3000);

// Middleware
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/pelicula', peliculasRoutes);

export default app;
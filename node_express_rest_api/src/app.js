import express from "express";
import morgan from "morgan";
import lenguajesRutas from "./routes/language.routes"

const app = express();

// Settings
app.set("port", 3000);

// Middleware
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/lenguajes", lenguajesRutas);

export default app;
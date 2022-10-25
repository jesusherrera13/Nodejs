const express = require('express');
const app = express();
const routerMatematicas = require('./routers/matematicas.js');
const routerProgramacion = require('./routers/programacion.js');

const { infoCursos } = require('./datos/cursos');

// Routers
app.use('/api/cursos/programacion', routerProgramacion);
app.use('/api/cursos/matematicas', routerMatematicas);

app.get('/api/cursos', function(req, res) {
    res.send(JSON.stringify(infoCursos));
}); 

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el puerto ${PORT}...`)
});
const http = require('http');
const {infoCursos} = require('./cursos');

const servidor = http.createServer((req, res) => {
    const {method} = req;
    if(method == 'GET') {
        return manejarSolicitudGET(req, res);
    }
    else if(method == 'POST') {
        return manejarSolicitudPOST(req, res);
    }
    else {
        res.statusCode = 501;
        res.end(`El metodo usado no puede ser manejado por el servidor: ${method}`);
    }
});

const PORT = 3000;

servidor.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el puerto ${PORT}`)
});

function manejarSolicitudGET(req, res) {
    const path = req.url;
    if(path === '/') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        return res.end('Bienvenidos a mi primer servidor y API creado con Node.js y nodemon');
    }
    else if(path === '/cursos') {
        return res.end(JSON.stringify(infoCursos));
    }
    else if(path === '/cursos/programacion') {
        return res.end(JSON.stringify(infoCursos.programacion));
    }
    else {
        res.statusCode = 404;
        return res.end('El recurso solicitado no existe...');
    }
}

function manejarSolicitudPOST(req, res) {
    const path = req.url;
    if(path === '/cursos/programacion') {
        let cuerpo = '';
        req.on('data', contenido => {
            cuerpo += contenido.toString();
        });

        req.on('end', () => {
            console.log(cuerpo);
            console.log(typeof cuerpo);
            cuerpo = JSON.parse(cuerpo);
            console.log(cuerpo.titulo);
            res.end('El servidor recibio una peticion para /cursos/programacion');
        });
        
        return;
    }
    else {
        res.statusCode = 404;
        res.end('El recurso solicitado no existe...');
        return;
    }
}
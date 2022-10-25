const fs = require('fs');

function leer() {
    return fs.readFileSync('./index.html', 'utf-8', (err, contenido) => {
        if(err) {
            throw err;
        }
    });
}

function renombrar() {
    fs.renameSync('./index.html', './main.html', (err) => {
        if(err) {
            throw err;
        }

        console.log('Nombre cambiado con éxito');
    });
}

function agregar(texto) {
    fs.appendFileSync('./main.html', '\n' + texto, (err) => {
        if(err) {
            throw err;
        }

        console.log('Archivo actualizado (append)');
    });
}

function escribir(texto) {
    fs.writeFileSync('./main.html', texto, (err) => {
        if(err) {
            throw err;
        }

        console.log('Archivo actualizado (write)');
    });
}

function eliminar() {
    fs.unlinkSync('./readme.md', (err) => {
        if(err) {
            throw err;
        }

        console.log('Archivo eliminado');
    });
}

module.exports = {
    leer: leer,
    renombrar: renombrar,
    agregar: agregar,
    escribir: escribir,
    eliminar: eliminar,
};

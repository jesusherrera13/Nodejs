import app from './app';

const main = () => {
    app.listen(app.get('port'));
    console.log(`Servidor escuchando en http://localhost:${app.get('port')}`);
}

main();
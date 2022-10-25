let infoCurso = {
    "titulo": "Aprende Node.js",
    "numVistas": 369,
    "numLikes": 1000,
    "temas": [
        "Javascript",
        "Node.js"
    ],
    "esPublico": true
};

let infoCursoJSON = JSON.stringify(infoCurso);

console.log(typeof infoCurso);
console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);
console.log(infoCursoJSON);

let infoCursoObjeto = JSON.parse(infoCursoJSON);

console.log(typeof infoCursoObjeto);
console.log(infoCursoObjeto);
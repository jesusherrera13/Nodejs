window.addEventListener("load", init);

function init () {
    const li_peliculas = document.getElementById('li-peliculas');
    li_peliculas.addEventListener('click', getMovies);

    const li_actores = document.getElementById('li-actores');
    li_actores.addEventListener('click', getActores);

    const li_generos = document.getElementById('li-generos');
    li_generos.addEventListener('click', getGeneros);

    getMovies();
}

function getMovies() {

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        const data = JSON.parse(this.responseText);
        const contenido = document.getElementById('contenido');
        contenido.innerHTML = '';
        let ul = document.createElement('ul');

        data.forEach(item => {
            var li = document.createElement('li');
            li.textContent = item.titulo;
            ul.append(li);
        });

        contenido.append(ul);
    }
   
    xhttp.open("GET", "http://eljuegoperfectomx.com/api/noticia");
    xhttp.send();
}

function getActores() {

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        const contenido = document.getElementById('contenido');
        contenido.innerHTML = '';
    }
   
    xhttp.open("GET", "http://eljuegoperfectomx.com/api/noticia");
    xhttp.send();
}

function getGeneros() {

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        const contenido = document.getElementById('contenido');
        contenido.innerHTML = '<h1>Generos</h1>';
    }
   
    xhttp.open("GET", "http://eljuegoperfectomx.com/api/noticia");
    xhttp.send();
}
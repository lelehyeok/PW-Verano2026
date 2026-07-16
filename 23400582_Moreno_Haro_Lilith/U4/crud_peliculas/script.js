let peliculas = [];
let sigId = 0;

const form = document.getElementById("formulario");
const id = document.getElementById("id");
const titulo = document.getElementById("titulo");
const director = document.getElementById("director");
const año = document.getElementById("año");
const tabla = document.getElementById("tablaPeliculas");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    if(id.value == ""){
        peliculas.push({
            id: sigId++,
            titulo: titulo.value,
            director: director.value,
            año: Number(año.value)
        });
    }else{
        const pelicula = peliculas.find(p => p.id == id.value)
        pelicula.titulo = titulo.value;
        pelicula.director = director.value;
        pelicula.año = Number(año.value)
    }

    form.reset();
    id.value = "";
    mostrarPeliculas();
});

function mostrarPeliculas(){
    tabla.innerHTML="";
    peliculas.forEach((pelicula) => {
        tabla.innerHTML += `
        <tr>
            <td>${pelicula.id}</td>
            <td>${pelicula.titulo}</td>
            <td>${pelicula.director}</td>
            <td>${pelicula.año}</td>
            <td>
                <button onclick="editar(${pelicula.id})">
                    Editar
                </button>
                <button onclick="eliminar(${pelicula.id})">
                    Eliminar
                </button>
            </td>
        </tr>
        `;
    })
}

function editar (idPelicula){
    const pelicula = peliculas.find(p => p.id == idPelicula);
    id.value = pelicula.id;
    titulo.value = pelicula.titulo;
    director.value = pelicula.director;
    año.value = pelicula.año;
}

function eliminar(idPelicula){
    peliculas = peliculas.filter(p => p.id != idPelicula);
    mostrarPeliculas();
}
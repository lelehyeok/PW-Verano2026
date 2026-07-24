const express = require("express");
const app = express();
const PORT =  3000;
const cors = require("cors");
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/",(req,res) =>{
    res.send("Bienvenido a mi primer servidor");
});

app.listen(PORT,() => {
    console.log("Servidor iniciado en http://localhost:"+PORT);
});

app.get("/pagina", (req, res) =>{
    res.send(
        `
            <style>
                h1{color: red;}
            </style>
            <h1> Mi pagina </h1>
            <p>Creada con express</p>
        `
    );
})

app.get("/saludo/:nombre", (req, res) =>{
    const nombre = req.params.nombre;
    res.send("Hola "+nombre)
})

app.get("/par/:numero", (req, res)=>{
    let n = req.params.numero;
    if(n%2==0){
        res.send("El numero "+n+" es par")
    }else{
        res.send("El numero "+n+" es impar")
    }
})

app.get("/edad/:edad", (req,res)=>{
    let n = req.params.edad;
    if(n>=18){
        res.send("Eres mayor de edad");
    }else{
        res.send("Eres menor de edad");
    }
})

app.get("/calculadora/:operacion/:a/:b", (req, res)=>{
    let operacion = req.params.operacion;
    let a = parseFloat(req.params.a);
    let b = parseFloat(req.params.b);
    if(operacion=="suma"){
        let r = a+b;
        res.send("El resultado de la suma es "+r)
    }else if(operacion=="resta"){
        let r = a-b;
        res.send("El resultado de la resta es "+r)
    }else if(operacion=="multiplicacion"){
        let r = a*b;
        res.send("El resultado de la multiplicacion es "+r)
    }else if(operacion=="division"){
        let r = a/b;
        res.send("El resultado de la division es "+r)
    }
})

app.get("/tabla/:numero", (req, res)=>{
    let n = parseFloat(req.params.numero);
    let tabla = "";
            for (let i = 1; i <= 10; i++) {
            tabla+=`${n} x ${i} = ${n * i} <br>`;
            }
    res.send(tabla);
    
})

app.get("/calificacion/:nota", (req, res)=>{
    let n = parseFloat(req.params.nota);
    if(n<70){
        res.send("Reprobado")
    }else if(n>=70&&n<=79){
        res.send("Aprobado")
    }else if(n>=80&&n<=89){
        res.send("Muy bien")
    }else if(n>=90){
        res.send("Excelente")
    }
})

let peliculas = [
{
    id: 1,
    titulo: "Interestellar",
    director: "Christopher Nolan",
    año: 2014
},
{
    id: 2,
    titulo: "La Odisea",
    director: "Christopher Nolan",
    año: 2026
}
]

let idActual = peliculas.length +1;

app.get("/peliculas", (req,res) => {
    res.json(peliculas);
}); 

//pelicula por id
app.get("/peliculas/:id", (req,res) => {
    const id =  Number(req.params.id);
    const pelicula = peliculas.find(
        pelicula => pelicula.id === id
    );

    if (!pelicula){
        return res.status(404).json({
            mensaje: "Pelicula no encontrada"
        });
    }
    res.json(pelicula);
})

app.post("/peliculas", (req,res) => {
    const{ titulo, director, año } = req.body;
    if(!titulo || !director || !año){
        return res.status(400).json({
            mensaje: "Faltan datos de la pleicula"
        });
    }
    const nuevaPelicula = {
        id: idActual++,
        titulo: titulo,
        director: director,
        año: Number(año)
    };
    peliculas.push(nuevaPelicula);
    res.status(201).json({
        mensaje: "Pelicula registrada correctamente",
        pelicula: nuevaPelicula
    });
})

//actualizar pelicula
app.put("/peliculas/:id", (req, res) => {
    const id = Number(req.params.id);
    if(!titulo || !director || !año){
        return res.status(400).json({
            mensaje: "Faltan datos de la pleicula"
        });
    }

    const indice = pelicula.findIndex(
        pelicula => pelicula.id === id
    );

    if(indice === -1){
        return res.status(404).json({
            mensaje: "Pelicula no encontrada"
        });
    }

    peliculas[indice] = {
        id: id,
        titulo: titulo,
        director: director,
        año: Number(año)
    };

    res.json({
        mensaje: "Pelicula actualizada correctamente",
        pelicula: peliculas[indice]
    });
})

//eliminar pelicula
app.delete("/peliculas/:id", (req, res) => {
    const id = Number(req.params.id);
    const indice = peliculas.findIndex(
        pelicula => pelicula.id === id
    );

    if(indice === -1){
        return res.status(404).json({
            mensaje: "Pelicula no encontrada"
        });
    }

    const peliculaEliminada = peliculas[indice];

    peliculas.splice(indice, 1);
    res.json({
        mensaje: "Pelicula eliminada correctamente",
        pelicula: peliculaEliminada
    });

})


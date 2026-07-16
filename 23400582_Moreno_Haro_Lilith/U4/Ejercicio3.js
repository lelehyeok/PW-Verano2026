/*
    Ejercicio 1
*/
function potencia(b, e) {
    let r = 1;
    for (let i = 0; i < e;i++){
        r = r * b;
    }
    return r;
}

console.log(potencia(6, 2));

/*
    Ejercicio 2
*/
let d = 5000;
let op;
let msj;
do {
    const menu = "====Menú de opciones====\n" +
                 "1. Consultar saldo \n" +
                 "2. Depositar \n" +
                 "3. Retirar saldo \n"
                 "4. Salir";      

    op = parseInt(prompt(menu));
    switch (op) {
        case 1:
            console.log(d);
            break;
        case 2:
            msj = parseFloat(prompt("¿Cuanto dinero desea depositar?"));
            d = d + msj;
            break;
        case 3:
            msj = parseFloat(prompt("¿Cuanto dinero desea rettirar?"));
            d = d - msj;
            break;
        case 4:
            console.log("Nos vemos");
            break;
    }
}while(op!=4)

/*
    Ejercicio 3
*/
function aleatorio() {
    return Math.floor(Math.random()*6+1)
}

let d1 = 0;
let d2 = 0;
let lanzamientos = 0;
do {
    d1 = aleatorio();
    d2 = aleatorio();
    lanzamientos++;
    console.log(`${d1} - ${d2}`);
} while (d1 != d2)
console.log(`Se necesitaron ${lanzamientos} lanzamientos`)

/*
    Ejercicio 4
*/
function aleatorio() {
    return Math.floor(Math.random()*100+1)
}

let n = aleatorio();
let intentos = 7;
let msj;
do {
    msj = parseInt(prompt("Ingresa el numero que crees que sea"));
    if (msj > n) {
        console.log(`El numero generado es mas chico que ${msj}`);
        intentos--;
        console.log(`Te quedan ${intentos} intentos`);
    } else if (msj < n) {
        console.log(`El numero generado es mas grande que ${msj}`);
        intentos--;
        console.log(`Te quedan ${intentos} intentos`);
    } else if (msj === n) {
        console.log(`Adivinaste el numero exacto ${n}`);
    }
} while (msj !== n && intentos > 0);
if (intentos == 0 && msj !== n) {
    console.log(`Te quedaste sin intentos, el numero era ${n}`);
}

/*
    Ejercicio 5
*/
const ventas = [];
let bandera = true;

do {
    let vendedor = prompt("Nombre del vendedor: ");
    let producto = prompt("Producto: ");
    let cant = parseInt(prompt("Cantidad vendida: "));
    let pu = parseFloat(prompt("Precio unitario: "));
    let tot = cant * pu;

    let nuevaVenta = {
        vendedor: vendedor,
        producto: producto,
        cant: cant,
        pu: pu,
        tot: tot
    };

    ventas.push(nuevaVenta);

    let msj = prompt("¿Desea registrar otra venta? (si/no)").toLowerCase();
    if (msj !== "si") {
        bandera = false;
    }

} while (bandera);

let totalVentas = ventas.length;

let ingresos = ventas.reduce((acum, ventaActual) => {
    return acum + ventaActual.tot;
}, 0);

let cantProd = {};

ventas.forEach(venta => {
    if (cantProd[venta.producto]) {
        cantProd[venta.producto] += venta.cant;
    } else {
        cantProd[venta.producto] = venta.cant;
    }
});

let ingVend = {};

ventas.forEach(venta => {
    if (ingVend[venta.vendedor]) {
        ingVend[venta.vendedor] += venta.tot;
    } else {
        ingVend[venta.vendedor] = venta.tot;
    }
});

let mejVend = "";
let maxVent = 0;

for (let vendedor in ingVend) {
    if (ingVend[vendedor] > maxVent) {
        maxVent = ingVend[vendedor];
        mejVend = vendedor;
    }
};

console.log(`Total de ventas realizadas ${totalVentas}`);
console.log(`Total de ingresos $${ingresos}`);
console.log(`Unidades vendidas por producto: `);
for (let prod in cantProd) {
    console.log(`- ${prod}: ${cantProd[prod]} unidades`);
}

console.log(`Vendedor con mas ventas ${mejVend} ($${maxVent})`);
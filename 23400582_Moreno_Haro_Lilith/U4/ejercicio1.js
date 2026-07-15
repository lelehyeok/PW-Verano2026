/*
    Ejercicio 1
*/

    
    function aleatorio() {
        return Math.floor(Math.random() * 100 + 1)
    }

    let n1 = aleatorio();
    let n2 = aleatorio();

    console.log(n1, n2)

    if (n1 > n2) {
        console.log(n1+" es mayor que "+n2)
    } else if(n2 > n1){
        console.log(n2+" es mayor que "+n1)
    } else {
        console.log("Los numeros son iguales")
    }
    

/*
    Ejercicio 2
*/

    
    function num5() {
        return Math.floor(Math.random() * 5)
    }

    let num = num5();

    do {
        num = num5();
        console.log(num)
    } while (num != 0)
    */

/*
    Ejercicio 3
*/

    
    function n210() {
        return Math.floor(Math.random() * 10+2)
    }

    let n = n210();

    for (let i = 1; i <= 10; i++) {
        console.log("Iteración: ", i);
        console.log(`${n} x ${i} = ${n * i}`)
    }
    

/*
    Ejercicio 4
*/
    
    let num=[];
    let pares = 0;
    let impares = 0;
        for (let i = 0; i <= 10; i++){
            num.push(Math.floor(Math.random()*100+1))
        }

        for (let i = 0; i < num.length; i++){
            if (num[i] % 2 == 0) {
                pares++;
            } else {
                impares++;
            }
        }    

    console.log("Los números generados en el arreglo son:", num);
    console.log(`Total de números pares: ${pares}`);
    console.log(`Total de números impares: ${impares}`);
    

/*
    Ejercicio 5
*/
    let ventas;
    let min = 5000;
    let max = 30000;

    do {
        let n = prompt(`Ingresa las ventas del empleado (entre ${min} y ${max}):`);
        ventas = parseFloat(n);
        if (ventas < min || ventas > max) {
            console.log("Valor inválido. Por favor, ingresa una cantidad válida entre 5,000 y 30,000.");
        }
    } while (ventas < min || ventas > max)
    let c;
    if (ventas < 10000) {
        c = ventas * 0.10;
        console.log("Se aplicó una comisión del 10%");
    } else {
        c = ventas * 0.15;
        console.log("Se aplicó una comisión del 15%");
    }

    console.log(`El empleado recibirá $${c} de comisión`)



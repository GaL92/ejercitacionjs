//Ejercicio 1
/* primerNumero = prompt("Inserte 1° número");
segundoNumero = prompt("Inserte 2° número");

if (primerNumero>segundoNumero){
    console.log(primerNumero +" es mayor que " +segundoNumero);
}else{
    console.log(primerNumero +" no es mayor que " +segundoNumero);
} */

//Ejercicio 2
/* 
primerNumero = prompt("Inserte 1° número");
segundoNumero = prompt("Inserte 2° número");

if (primerNumero==segundoNumero){
    console.log("El primer número es igual que el segundo." );
}else{
    console.log("El primer número es diferente del segundo." );
} */

//Ejercicio 3

/* primerNumero = prompt("Inserte 1° número");
segundoNumero = prompt("Inserte 2° número");

if (primerNumero>segundoNumero){
    console.log("El primer número es más grande que el segundo." );
}else if(primerNumero<segundoNumero){
    console.log("El segundo número es más grande que el primero." );
}else{
    console.log("El primer número es igual al segundo");
} */

//Ejercicio 4 (PREGUNTAR)

/* primerNumero = prompt("Inserte 1° número");
segundoNumero = prompt("Inserte 2° número");
tercerNumero = prompt("Inserte 3° número");

unNumero =[primerNumero, segundoNumero, tercerNumero];


let i=0
if(unNumero[i]==unNumero[i+1]||unNumero[i]==unNumero[i+2]||unNumero[i+1]==unNumero[i+2]){
    console.log("Debe ingresar 3 números distintos entre sí." );
}else if (unNumero[i]<unNumero[i+1]&&unNumero[i]<unNumero[i+2]){
    console.log("El 1° número es el menor de los ingresados." );
}else if(unNumero[i+1]<unNumero[i]&&unNumero[i+1]<unNumero[i+2]){
    console.log("El 2° número es el menor de los ingresados." );
}else{
    console.log("El 3° número es el menor de los ingresados." );
}
 */

//Ejercicio 5 (PREGUNTAR)

persona1={
    nombre:"Jaqueline",
    edad:37,
    altura:160,
}

persona2={
    nombre:"Celeste",
    edad:35,
    altura:168,
}

if (persona1.altura>persona2.altura){
    console.log(persona1.nombre + " tiene más altura que "+ persona2.nombre)
    if (persona1.edad>persona2.edad){
        console.log(persona1.nombre + " es mayor en edad que "+ persona2.nombre)
    }else{
        console.log(persona2.nombre + " es mayor en edad que "+ persona1.nombre)
    }
}else{
    console.log(persona2.nombre + " tiene más altura que "+ persona1.nombre)
}if (persona1.edad>persona2.edad){
    console.log(persona1.nombre + " es mayor en edad que "+ persona2.nombre)
}else{
    console.log(persona2.nombre + " es mayor en edad que "+ persona1.nombre)
}


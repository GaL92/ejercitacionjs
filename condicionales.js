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

/* persona1={
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
 */

//Ejercicio 6

/* miNombre = prompt("Ingresa tu nombre");
miEdad = prompt("Ingresa tu edad");
miAltura = prompt("Ingresa tu altura en cm");
miVision = prompt("En un nivel del 1-10 ¿cómo calificas tu visión?")

if (miEdad>=18&&miAltura>150&&miVision>=8){
    console.log("Está capacitadx para manejar un automóvil.")
} */

//Ejercicio 7

/* let nombre = prompt("Ingrese su nombre");
let pase = prompt("¿Qué tipo de pase tiene?");
let entrada = prompt("¿Tiene entrada? Responder: si o no");
let si = true;
let no = false;

if (nombre == "Gabriela" || nombre == "gabriela" || pase == "vip"||pase == "Vip"){
    console.log("Bienvenidx, puede pasar.")
}else if(entrada == "si"){
    rtaEntrada= prompt("¿Desea utilizarla? Responder: si o no");
    if (rtaEntrada == "si"){
        console.log("Bienvenidx, puede pasar.")
    }  
}else{
    comprar = prompt("¿Desea comprar la entrada? Responder si o no");
    if (comprar == "si"){
        dinerodisponible = prompt("Ingresar dinero disponible");
        if (dinerodisponible>=1000){
            console.log("Puede comprar la entrada. Bienvenidx, puede pasar.")
        }else{
            console.log("Lo siento, no tiene dinero disponible para comprar la entrada de ingreso. ")
        }

    }else{
        console.log("¡Oh!será en otra oportunidad. Hasta luego. ")
    }
} */


//Ejercicio 8
numeroIncognita= 9;

numeroIngresado = prompt("¿En qué número del 1 al 10 estoy pensando");

if (numeroIngresado==numeroIncognita){//primer intento
    console.log("¡FELICIDADES!¡El número ingresado es correcto!");
    }else if (numeroIngresado<numeroIncognita&&1<=numeroIngresado){
                console.log("El número ingresado es menor que la incógnita, vuelve a intentarlo");
                numeroIngresado=prompt("Ingresa tu segundo intento. ");   
                if (numeroIngresado==numeroIncognita){
                    console.log("¡FELICIDADES!¡El número ingresado es correcto!");
                    }else if (numeroIngresado<numeroIncognita){ //segundo intento menor
                        console.log("El numero ingresado es menor que la incógnita, vuelve a intentarlo");
                        numeroIngresado=prompt("Ingresa tu segundo intento. "); //tercer intento
                        if (numeroIngresado==numeroIncognita){
                            console.log("¡FELICIDADES!¡El número ingresado es correcto!");
                        }else{
                            console.log("El número ingresado es incorrecto. Será en otra oportunidad (:");
                        }}else { //segundo intento mayor
                            console.log("El numero ingresado es mayor que la incógnita, vuelve a intentarlo");
                            numeroIngresado=prompt("Ingresa tu tercer intento. "); //tercer intento
                            if (numeroIngresado==numeroIncognita){
                                console.log("¡FELICIDADES!¡El número ingresado es correcto!");
                            }else{
                                console.log("El número ingresado es incorrecto. Será en otra oportunidad (:");
                            }}} else if (numeroIngresado>numeroIncognita&&numeroIngresado<=10){
                                    console.log("El numero ingresado es mayor que la incógnita, vuelve a intentarlo");
                                    numeroIngresado=prompt("Ingresa tu segundo intento. ");   
                                    if (numeroIngresado==numeroIncognita){
                                        console.log("¡FELICIDADES!¡El número ingresado es correcto!");
                                        }else if (numeroIngresado<numeroIncognita){ //segundo intento menor
                                            console.log("El numero ingresado es menor que la incógnita, vuelve a intentarlo");
                                            numeroIngresado=prompt("Ingresa tu segundo intento. "); //tercer intento
                                            if (numeroIngresado==numeroIncognita){
                                                console.log("¡FELICIDADES!¡El número ingresado es correcto!");
                                            }else{
                                                console.log("El número ingresado es incorrecto. Será en otra oportunidad (:");
                                            }}else { //segundo intento mayor
                                                console.log("El numero ingresado es mayor que la incógnita, vuelve a intentarlo");
                                                numeroIngresado=prompt("Ingresa tu segundo intento. "); //tercer intento
                                                if (numeroIngresado==numeroIncognita){
                                                    console.log("¡FELICIDADES!¡El número ingresado es correcto!");
                                                }else{
                                                    console.log("El número ingresado es incorrecto. Será en otra oportunidad (:");
                                                }}}else{
                                                    alert("Debe ingresar un número entre el 1 y el 10")
                                                }

                    

                
        


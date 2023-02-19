/* miNombre = 'Gabriela';

console.log(miNombre);

miApellido = 'Lucero';

console.log(miApellido);

 miEdad = 30;

console.log(miEdad);

miMascota = 'Mishina';
edadMascota = '8';

console.log(miMascota);
console.log(edadMascota); 

nombreCompleto = miNombre + " " +miApellido;
console.log(nombreCompleto);

textoPresentacion = "Hola, mi nombre es "+nombreCompleto+" tengo " +miEdad+" años y una gatita llamada "
+miMascota+" que tiene "+edadMascota+" añitos de edad.";
console.log(textoPresentacion); 

 sumaEdades = miEdad + edadMascota; 
restaEdades = miEdad - edadMascota;
productoEdades = miEdad * edadMascota;
divisionEdades = miEdad / edadMascota; 

 miNombre = prompt('Escriba su nombre');
miApellido = prompt('Escriba su Apellido');
miEdad = prompt('Escriba su edad');
miMascota = prompt('Escriba el nombre de su mascota');
edadMascota = prompt('Escriba la edad de su mascota');


console.log(miNombre);
console.log(miApellido);
console.log(miEdad);
console.log(miMascota);
console.log(edadMascota);

textoPresentacion = "Hola, mi nombre es "+miNombre+" "+miApellido+" tengo " +miEdad+" años y una gatita llamada "
+miMascota+" que tiene "+edadMascota+" añitos de edad.";
console.log(textoPresentacion);

sumaEdades = miEdad + edadMascota; 
restaEdades = miEdad - edadMascota;
productoEdades = miEdad * edadMascota;
divisionEdades = miEdad / edadMascota;
 

alumnx = {
    nombre: 'Maria Celeste',
    apellido: 'Espina',
    edad:32,
    estudia:'Artes visuales',
    hobbie:'Ir a museos',
}
console.log(alumnx);
console.log(alumnx.nombre);
console.log(alumnx.apellido);
console.log(alumnx.edad);
console.log(alumnx.estudia);
console.log(alumnx.hobbie);

mascota = {
    nombre: 'Mishina',
    apellido: 'Lucero Attinello',
    edad:8,
    hobbie:'revolcarse en el pasto',
    superpoder:'tiene un ronroneo que cura',
}

console.table(mascota); 

 let frutas = ['frutilla','naranja','durazno','manzana','kiwi'];

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);

let numeros = [1,1,2,3,5,8,13,21,34,55];
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);
console.log(numeros[5]);
console.log(numeros[6]);
console.log(numeros[7]);
console.log(numeros[8]);
console.log(numeros[9]);
console.log(numeros[10]);

let familia = ['Graciela', 'Luis', 'Pablo', 'Cecilia', 'Laura', 'Gabriela'];
console.log(familia[0]);
console.log(familia[1]);
console.log(familia[2]);
console.log(familia[3]);
console.log(familia[4]);
console.log(familia[5]);
console.log(familia[6]);

textoAleatorio = "Me gusta comer "+numeros[3]+" "+frutas[1]+"s por día. "+familia[4]+" me dice que le convide con una.";

console.log(textoAleatorio); 

miEdad = prompt("Escriba su edad");
compaEdad = prompt("Escriba la edad de le compa");

if (miEdad<compaEdad){
    soyMenor = "Soy menor que mi compa";   
}else if (miEdad>compaEdad){
    soyMayor = "Soy mayor que mi compa";
}else{
mismaEdad = "Tengo la misma edad que mi compa";
}


console.log("Mi edad es menor a la de mi compa: ") + console.log(miEdad<compaEdad)   ;
console.log("Mi edad es mayor a la de mi compa: ") + console.log(miEdad>compaEdad)  
console.log("Mi edad es igual a la de mi compa: ") + console.log(miEdad=compaEdad)  ; 

 if (miEdad<18){
    soyMenor = "Soy menor de edad";   
}else {
    soyMayor = "Soy mayor de edad";
}

console.log("Soy mayor de edad: ") + console.log(miEdad>18)   ; */


edadPersona = prompt("Inserte su edad");
alturaPersona = prompt("¿Cuál es su altura en cm?");

if (edadPersona>6 && alturaPersona>=120){
    puedeSubir=true;
}else{
    puedeSubir=false;
}

console.log("Puede subir a los autitos chocadores : ") + console.log(puedeSubir) ;


/*alert("Hola");*/

/*let recipiente = "papel";

document.write(recipiente);*/

/* Tipos de datos 
String, Number, Boolean, Symbol,

let string = "hola";
let number = 5;
let booleano = true false;

let var const 
var numero = 15; alcance global 
let numer = 45; tiene menos alcance 
const es una constante ej const nombre  = "habid"; 
Ya no voy a poder cambiarlo la variable const y toca declararla y inicializarla o sea darle un valor enseguida  - undefined es una variable que existe pero no tiene un valor */
/*let numero;
numero = 89;
numero = 87;
document.write(numero);*/


/* Que es el hoisting, */

/*let carro, carro2, carro3;
carro = "rojo";
carro2 = "azul";
carro3 = "verde";

alert(carro);
alert(carro2);
alert(carro3);*/


/* Null es una variable vacia que la declaramos vacia
 let numero = null;*/

 /*let numero = 5;
 let numero1 = 6;

 alert(numero + numero1);
 es intentar hacer una operacion con algo que no es un numero*/

 /*prompt("Hola Rancio");

 prompt("Dime tu nombre");

 let nombre = prompt("Dime tu nombre");
 alert(nombre); */
 

 /*Operadores de asignación 
asignacion suma
let numero = 10;
 numero **= 5
 document.write(numero)*/

 /*asignacion resta 
 -=

 asignacion multiplicacion 
 *=

 asignacion de division 
 /=

 asignacion de resto
 %= Es el resto de la division 
 
 asignacion de exponenciacion **= 
 */


 /*Operadores aritmeticos 
  adicion +
  
  let numero2 = 10;
  let numero3 =5;
  document.write(numero2 + numero3);
  
  sustraccion --
  
  division numero1 / numero2
  
  expnencial numero1**2
  
  incremento ++
  Primero poner operadores aritmeticos y luego mostrarlo
  
  multiplicacion *
  
  resto &
  
  sustraccion -
  
  negation unary -numero */

  /*let saludo = "367";
  let pregunta = 5;

  let frase = "" + saludo.concat(pregunta);

  document.write(frase);*/

  /*let frase1 = "lucas dalto";
  let frase2 = `soy ${frase1} y estoy caminando`;

  document.write(frase2)<br>;*/


  /*let hermana = "Angela Vargas";
  let frase3 = `Ella es  ${hermana} y es mi hermana`;

  document.write(frase3);*/

/*let nombre = "Mi nombre es Habid";
let frase = "Mi nombre es 'Habid' y soy un crack";

document.write(frase);*/

/*< menor que, >mayor que 

/* Operadores de comparación 
== es igual a 
=== estrictamente igual a (tipo de dato y valor)
!= no es igual a
!== no estrictamente igual 
<=
>= */


// /* Operadores logicos */

// && si cualquiera de las dos es falsa todo es falso
// || si una de las dos es verdadera entonces todo es verdadero
// ! ponerlo antes para cambiar el valor de la variable

/*let valor = true;
let valor2 = true;

let resultado = valor && valor2;
let resultado2 = valor || valor2;
let resultado3 = !valor;

document.write(resultado3);*/
// let numero1 = "4";
// let numero2 = 4;

// document.write(numero1 == numero2);


/* Camelcase

decimeAlgoPorFavor = */

// parseInt

// holaComoEstas*/

/*let nombre = "Angela";

if  (nombre == "Habid"){
    document.write("Tu nombre es Habid");
}
else if (nombre == "Angela"){
    document.write("Tú eres la hermana de Habid");
 }*/

//  se pueden hacer la cantidad de else if cuantas veces se quiera 
 /*let dinerocofla = prompt("¿Cuánto dinero tienes Cofla?");
 let dineroray = prompt("¿Cuánto dinero tienes  Ray?");
 let dinerokeih = prompt("¿Cuánto dinero tienes Keih?");

 dinerocofla = parseInt(dinerocofla);

if (dinerocofla >= 0.6 && dinerocofla < 1) {
    alert("Cofla Comprate el helado de agua");
    alert("Y te sobra cofla" + (dinerocofla - 0.6))
}

else if (dinerocofla >= 1 && dinerocofla < 1.6) {
    alert("Cofla Comprate el helado de crema")
    alert("Y te sobra cofla" + (dinerocofla - 1))
}
else if (dinerocofla >= 1.6 && dinerocofla < 1.7) {
    alert("Cofla Comprate el helado de heladix")
    alert(`Y te sobra cofla ${dinerocofla - 1.6}`)
}
else if (dinerocofla >= 1.7 && dinerocofla < 1.8) {
    alert("Cofla Comprate el helado de heladovich")
    alert("Y te sobra cofla" + dinerocofla - 1.7)
}
else if (dinerocofla >= 1.8 && dinerocofla < 2.9) {
    alert("Cofla Comprate el helado de helardino")
    alert("Y te sobra cofla" + (dinerocofla - 1.8))
}
else if (dinerocofla >= 2.9) {
    alert("Cofla Comprate el helado de confites o un pote de helado de medio litro")
    alert("Y te sobra cofla " + (dinerocofla - 2.9))
}
else if (dinerocofla -= 0.6) {
    alert("Cofla No tienes para nada pinche pobre de mierda")
}

if (dineroray >= 0.6 && dineroray < 1) {
    alert("Ray Comprate el helado de agua");
}

else if (dineroray >= 1 && dineroray < 1.6) {
    alert("Ray Comprate el helado de crema")
}
else if (dineroray >= 1.6 && dineroray < 1.7) {
    alert("Ray Comprate el helado de heladix")
}
else if (dineroray >= 1.7 && dineroray < 1.8) {
    alert("Ray Comprate el helado de heladovich")
}
else if (dineroray >= 1.8 && dineroray < 2.9) {
    alert("Ray Comprate el helado de helardino")
}
else if (dineroray >= 2.9) {
    alert("Ray Comprate el helado de confites o un pote de helado de medio litro")
}
else if (dineroray -= 0.6) {
    alert("Ray No tienes para nada pinche pobre de mierda")
}

if (dinerokeih >= 0.6 && dinerokeih < 1) {
    alert("Keih Comprate el helado de agua");
}

else if (dinerokeih >= 1 && dinerokeih < 1.6) {
    alert("Keih Comprate el helado de crema")
}
else if (dinerokeih >= 1.6 && dinerokeih < 1.7) {
    alert("Keih  el helado de heladix")
}
else if (dinerokeih >= 1.7 && dinerokeih < 1.8) {
    alert("Keih Comprate el helado de heladovich")
}
else if (dinerokeih >= 1.8 && dinerokeih < 2.9) {
    alert("Keih Comprate el helado de helardino")
}
else if (dinerokeih >= 2.9) {
    alert("Keih Comprate el helado de confites o un pote de helado de medio litro")
}
else if (dinerokeih -= 0.6) {
    alert(" Keih No tienes para nada pinche pobre de mierda")
}*/
/* Arrays 

let variable = ["contenido", 3, true, false];

document.write(variable[3]);*/  
/*Arrays asociativos 
let auto = {
    nombre: "mercedez",
    modelo: 13,
    color: "rojo",
    puestos: 5
};

let nombre = auto["nombre"];

// document.write(auto["nombre"])

let frase = `el nombre de mi carro es: <b>${nombre}</b> <br>`;

document.write(frase);*/

// Bucles e Interacción Preguntan todo el tiempo a dierencia del If que solo pregunta una vez 

// let numeroParaSumar = 0;

/*if (numeroParaSumar < 10){
    numeroParaSumar++;
    document.write(numeroParaSumar);
}*/

/*while (numeroParaSumar <= 6){
    numeroParaSumar++;
    document.write(numeroParaSumar + "<br>");
}*/


/*do {
    
    document.write(numeroParaSumar + "<br>")
    numeroParaSumar++;
}

while (numeroParaSumar < 7){

}
while (numeroParaSumar < 100){
    numeroParaSumar++;
    document.write(numeroParaSumar + "<br>");
    if (numeroParaSumar == 99){
        break;
    }
}
*/
/*let i;
for (i = 6; i >= 0; i--){
    if (i == 4){
        continue;
    }
    document.write(i + "<br>")
};*/

/*let animales = ["gato", "perro", "león"];
animales.edad =20;

for (animal in animales) {
    
    document.write(animal + "<br>");    
    
}

document.write("<br>");

for (animal of animales){
    document.write(animal + "<br>");
}

document.write(animales.edad);*/

/*let array1 = ["maria","josefa","roberta"];
let array2 = ["pedro","marcelo", array1, "josefina"];
forRancio: 
for (let array in array2) {
    if (array == 2){
        for (let array of array1){
            document.write(array + "<br>")
            break forRancio;
        }
    } else {
        document.write(array2[array] + "<br>");
    }
}*/

// Funciones  
/*function saludar (){
    let respuesta = prompt("¿Hola lucas como fue tu dia?");
if (respuesta == "bien"){
    alert("me alegro");
}else {
    alert("Una pena");
}
}
saludar()*/

/*saludar = function(){
    let respuesta = prompt("¿Hola lucas como fue tu dia?");
if (respuesta == "bien"){
    alert("me alegro");
}else {
    alert("Una pena");
}
}
saludar()*/

// function saludar(){} definir funcion
// saludar() activar funcion

/*function saludar(){
    alert("hola");
    return "la funcion se ejecuto";
} 
let saludo = saludar();
document.write(saludo);*/


//parametros es lo que hace que la funcion pueda variar 

// let num1 = 32;
// let num2 = 12;

// function suma(){
   /* let num1 = 32;
    let num2 = 12;
    let res = num1 + num2;
    document.write(res);
}*/
// suma()

/*function suma(num1,num2){
    let res = num1 + num2;
    document.write(res);
    document.write("<br>");

}
suma(12,32);
suma(50,23);*/

/*function suma(num1,num2){
    let res = num1 + num2;
    return res
}
let resultado = suma(29,25);
document.write(resultado)*/

/*function saludar(nombre){
    let frase = `¡Hola ${nombre}! ¿Como estás?`;
    document.write(frase)
}
saludar("Petro")*/

// Un hoombre gana la loteria y decide hacer una fiesta para celebrarlo y compro una maquina que solo deja pasar los mayores de edadm la primera persona que entre despues de las 2AM nno paga 
 
/*let free = false;

const validarCliente = (time)=>{
    let edad = prompt("¿Cual es tu edad?");
    if (edad > 18){
        if(time >= 2 && time < 7 && free == false){
            alert("Podes pasar gratis porque sos la primera persona despues de las 2 am ");
            free = true;
        }else{
            alert(`Son las ${time}:00Hs y podes pasar pero tenes que pagar la entrada`);
        }
    }else {
        alert("Mira papu sos menor de edad y no puedes pasar");
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);*/






















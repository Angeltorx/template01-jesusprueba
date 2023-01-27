console.log("Entro index.js");

let nombre ="Angel";

console.log(`Hola mi nombre es ${nombre}`);

let nombre2 ="Pedro";

console.log(`Hola tu nombre es ${nombre2}`);

function saludarMensaje (nombre){
    return `Hola mi nombre es ${nombre}, buenos dias`; // se puede añadir funcion a  
}
console.log(saludarMensaje("Angelo"));


function saludarMensaje(name){
let apellido ="martinez";
let nombres = [
    "Jesus",
    "angel",
    "juan",
    "Antonio",
    "francisco",
    "Andres"
];
}
//array o arreglo o lista
let numeros=[
    "uno",
    "dos",
    "tres",
    "cuatro",
    "cinco"
];

console.log (numeros);
console.log (numeros[0]);
console.log (`la cantidad de elementos en la lista es: ${numeros.length}`);

let paises = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia"
];

//console.log(paises);
//paises.push("Mexico");
//console.log(paises);
//paises.pop();
//console.log(paises);
//paises.shift();

//Elimine elemento numero 10
//paises.splice(10,1);
//console.log(paises);
//console.table(paises);

paises.splice(0,3);
console.log(paises);
paises.splice(17,3);
console.log(paises);



/*
let password = 123;

console.warn(paises);
console.error(paises);
console.warn("this is an error") //arroja el texto en background amarillo
console.error("this is an error") // arroja el text color en rojo.

console.table(paises); */
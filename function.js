

// Definimos la función holaMundo

function holaMundo (){
    console.log("Hola Mundo!");
}

holaMundo();

// Definimos la función sumar

function sumar (a,b){
    return a+b;
}

suma = sumar (3,4);
console.log(suma);
suma2 = sumar(3, -50);
console.log(suma2);
suma3 = sumar(300, 4.50);
console.log(suma3);

// Definimos la función sumarAlternativa
function sumarAlternativa(a, b) {
  let resultado = a + b;
  return resultado;
}

suma = sumarAlternativa(3, 4);
console.log(suma);
suma2 = sumarAlternativa(3, -50);
console.log(suma2);
suma3 = sumarAlternativa(300, 4.5);
console.log(suma3);
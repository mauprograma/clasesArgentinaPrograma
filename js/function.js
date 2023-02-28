
/*
document.getElementById('boton').onclick = function (){
    console.log("Capturamos el evento click")
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS"
}


document.addEventListener('click', function() {
    console.log("Hola mundo desde EventListener");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS"
});

*/


document.getElementById("boton").addEventListener('click', function() {
    console.log("Cambiamos texto desde EventListener");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS"
});

document.getElementById("boton_color").addEventListener('click', function() {
    console.log("Cambiamos el fondo desde EventListener");
    document.body.style.backgroundColor="#FF0000"
});



document.getElementById("boton_ocultar").addEventListener('click', function() {
    console.log("Ocultamos el texto desde EventListener");
    document.getElementById("demo").style.display= "none"
});

document.getElementById("boton_color_parrafo").addEventListener('click', function() {
    console.log("Cambiamos el color de los párrafos desde EventListener");
    const collection = document.getElementsByClassName("prueba");
    for (let i=0; i <collection.length; i++){
    collection[i].style.backgroundColor="green"
    }

});
document.getElementById("boton_default").addEventListener('click', function() {
    console.log("Restablecemos todo desde EventListener");
    document.body.style.backgroundColor="blue"
    document.getElementById("demo").innerHTML = "Estamos aprendiendo JavaScript"
    document.getElementById("demo").style.display= ""
    const collection = document.getElementsByClassName("prueba");
    for (let i=0; i <collection.length; i++){
    collection[i].style.backgroundColor="transparent"
    }

});



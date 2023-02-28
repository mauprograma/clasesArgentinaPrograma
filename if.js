let edad = 21


if(edad >0 && edad <= 121){
    if (edad >= 18){
        console.log("La persona es mayor de edad")
    } else {
        console.log("La persona es menor de edad")
    }
}else if (edad >121){
    console.log("La persona ya debe estar muerta")
}else{
    console.log("Lo ingresado no es un carácter válido")
}
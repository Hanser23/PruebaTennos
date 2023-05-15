
let palabra = "oso";

/* Convertimos la palabra ingresada toda en minuscula */
palabra.toLowerCase();
/* Creamos una variable el cual me guarde la palabra invertida
split lo que nos permite es convertir la palabra en array, 
reverse le da reversa al array,
*/
let palabraInvertida=palabra.split("").reverse().join("");
/* Realizamos una condicion que nos permita detectar si la palabra ingresada es igual a la palabra revertida */
if (palabra== palabraInvertida){
    console.log(true);
}else{
    console.log(false)
}



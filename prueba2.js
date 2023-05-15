var myInt = 22505255183;
//ejeplos de confirmacion de logica
//10222 falso
//235605 verdadero
  
//creamos una funcion que nos permita cambiar nuestra variable a number
let myIFunc = num => Number(num);
  
/*creamos una variabla para guardar  un array el cual primero lo convertimos en un string 
y luego le pasamos nuestra funcion para converitirlo nuevamente en numerico*/
var intArr = Array.from(String(myInt),myIFunc);

/* Guardamos la suma de los dos primeros numeros y 
los dos ultimos numeros del array y de numeros en variables  */
var Prinumeros=intArr[0] + intArr[1]
var Ultnumeros=intArr[intArr.length-1] + intArr[intArr.length-2]

/*Creamos una condicion que si la suma de los dos pares de numeros es verdadera imprima TRUE */ 
if ( Prinumeros==Ultnumeros ){
    console.log(true) 
}
else {
    console.log(false) 
    
}

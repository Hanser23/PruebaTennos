
function combinarLetrasEnOracion(matriz) {
  // creamos un array vacio para guadar las palabras iteredas de la matriz 
  const palabras = [];

  /* creamos un bucle el cual se va a estar repitiendo hasta que la i 
  sea mayor que la cantidad de los elemntos del primer array que tiene la matriz 
  y luego incrementamos nuestra variable i para que vaya cambiando de posicion en la matriz   */
  for (let i = 0; i < matriz[0].length; i++) {
    let palabra = '';
  
    
    /* Creamos un bucle que se estar repitiendo hasta que la j sea 
  mayor que la  cantidad de array que tiene la matriz  */
    for (let x = 0; x < matriz.length; x++) {
      /* condicion que se estara ejecutando mientras la i sea menor que 
       la  cantidad de elemntos de los  array en la matriz*/
      if (i < matriz[x].length) {
        /*si esto se cumple nos va permitir guardar en nuestra variable dichos elmentos por su posicion en la matriz*/
        palabra += matriz[x][i];

      }
    }
    //Aqui le agragamos las palabra en su orden correcto a nuestro array por medio de push
    palabras.push(palabra);


  }
    /*retornamos las palabras unidas en el arrego  en una 
    sola cadena de texto con un espacio entre cada palabra ' '*/
  return palabras.join(' ');
}
const matriz = [['j', 'l', 'l','m'], 
                ['u', 'i', 'i', 'a'],
                ['s', 'v', 'f', 'n'],
                ['t', 'e', 'e', ' ']];

const texto = combinarLetrasEnOracion(matriz);
console.log(texto);  

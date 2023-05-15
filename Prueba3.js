function ContarCaracteresComun(Palabra1, Palabra2) {
    const CarCont = {};
    let count = 0;
  
    // Creamos un bucle for para que itere la primera palabra y nos guarde la antidad de cada letra que tiene la palabra
    for (let i = 0; i < Palabra1.length; i++) {
      const Caracter = Palabra1[i];
      /*guardamos en el objeto la cantidad de ocurrencias de cada caracter en la 
      palabra 1, si ya existe una sumarle 1 o sino al 0 sumarle 1*/
      CarCont[Caracter] = (CarCont[Caracter] || 0) + 1;
    }
    // Creamos un bucle for para que itere la segunda palabra y nos guarde la antidad de cada letra que tiene la palabra2
    for (let i = 0; i < Palabra2.length; i++) {
      // se guarda el caracter en la posicion i 
      const Caracter = Palabra2[i];
      // creamos una condion que si ese caracter existe en el objero el contador se incremente y le reste uno al objeto
      if (CarCont[Caracter]) {
        count++;
        CarCont[Caracter]--;
      }
    }
    return count;
  }

  const Palabra1 = "aaav";
  const Palabra2 = "aaavv";
  
  const commonChars = ContarCaracteresComun(Palabra1, Palabra2);
  console.log("La cantidad de letras en comunes entre {" +Palabra1+'} y {'+Palabra2 + '} son: '+commonChars);

    
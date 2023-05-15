
/*creamos una funcion que nos elmine los valores que le pasemos 
como array, filter nos cree un nuevo array con la lista de numeros 
que tenemos pero que no nos incluya con [includes] los valores que le pasaremos por parametro
*/

function Eliminar(ListaNum, valoresE) {
    return ListaNum.filter((value) => ! valoresE.includes(value));
}
 
//Lista de array
const ListaNum = [1,1,2,3,1,2,3,4];
//Lista de array que vamos a eliminar o que no vamos a incluir 
const valoresE = [1,3];
//creamos constante llamando la funcion dentro de ella para que guarde lo que nos va a retornar
const resultado = Eliminar(ListaNum, valoresE);
//imprimir array
console.log(resultado); 
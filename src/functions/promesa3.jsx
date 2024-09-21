function promesa1() {
    console.log('Hola Mundo');
    return(
        <>
            <div>
                <h1>Programa de Promesas</h1>
            </div>
        </>
    )
}

function fcnSumarLento(num){
    /* var promesa = new Promise(function(resolve, reject){ });
    return promesa; */

    return new Promise(function(resolve, reject){
        /* if(num >= 5){
            reject('Sumar lento falló');
        } */
        setTimeout(() => {
            resolve(num + 1);
        }, 800);
    });
}

let fcnSumarRapido = (num) =>{
  return new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve(num + 1);
    }, 300);
  });  
};

/* fcnSumarLento(5).then((respuesta) => {
    console.log("Respuesta lenta: ", respuesta);
});

fcnSumarRapido(10).then((respuesta) => {
    console.log("Respuesta rapida: ", respuesta);
}); */

let arregloVarios = [fcnSumarLento(5), fcnSumarRapido(10), true, "¡Hola Mundo!"];

Promise.all(arregloVarios).then((respuestas) => {
    console.log("Respuesta: ", respuestas);
}).catch((err) => {
    console.log('Error en todas las promesas: ', err);
});

export default promesa1
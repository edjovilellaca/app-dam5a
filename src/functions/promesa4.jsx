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
        /* resolve(num + 1); */
        reject('Suma demasiado rapido');
    }, 1000);
  });  
};

Promise.race([fcnSumarLento(5), fcnSumarRapido(10)]).then((result) => {
    console.log('Respuesta: ', result);
}).catch((err) => {
    console.log('Error en la respuesta: ', err);
});

export default promesa1
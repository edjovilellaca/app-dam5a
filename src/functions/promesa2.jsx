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

function fcnSumarUno(num, fcnResultadoCallBack){
    var promesa =  new Promise(function(resolve, reject){
        if(num >= 7){
            console.log("El número ya es muy alto.");
        }
        setTimeout(function(){
            resolve(num + 1); 
        }, 800);
    });
    return promesa;
}

/* fcnSumarUno(5).then(function(nuevoNumero){
    console.log(nuevoNumero);
}); */

/* fcnSumarUno(5).then((nuevoNumero)=>{
    console.log("Resultado: ",nuevoNumero);
    return fcnSumarUno(nuevoNumero);
}).then((nuevoNumero)=>{
    console.log("Resultado: ",nuevoNumero);
    return fcnSumarUno(nuevoNumero);
}).then((nuevoNumero)=>{
    console.log("Resultado: ",nuevoNumero);
    return fcnSumarUno(nuevoNumero);
}); */

fcnSumarUno(5).then(fcnSumarUno)
              .then(fcnSumarUno)
              .then(nuevoNumero =>{
                console.log("Resultado: ", nuevoNumero);
              }).catch(error => {
                console.log('Error en la promesa', error);
            });


export default promesa1
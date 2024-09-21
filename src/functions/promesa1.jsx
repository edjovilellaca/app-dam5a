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
    setTimeout(function(){
        //return num + 1;
        fcnResultadoCallBack(num + 1);
    }, 800);
}

/* fcnSumarUno(5, function(nuevoValor1){
    console.log("Resultado: ", nuevoValor1);
}); */

fcnSumarUno (5, function(nuevoValor1){
    fcnSumarUno(nuevoValor1, function(nuevoValor2){
        console.log("Resultado:", nuevoValor2);
    });
});

fcnSumarUno(5, function(nuevoValor1){
    fcnSumarUno(nuevoValor1, function(nuevoValor2){
        fcnSumarUno(nuevoValor2, function(nuevoValor3){
            console.log("Resultado: ", nuevoValor3);
        });
    });
});

export default promesa1
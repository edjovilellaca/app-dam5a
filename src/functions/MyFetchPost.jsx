function MyFetchPost() {

    let ususario = {
        nombre: 'Aitana',
        edad: 25
    }

    fetch('https://reqres.in/api/users', {
        method: 'POST', 
        body: JSON.stringify(ususario), 
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(resp => resp.json())
    .then(console.log).catch(error => {
        console.log('Error en la petición API POST');
        console.log(error);
    });

    return(
        <>
            <div>
                <h1>Programa de Promesas</h1>
            </div>
        </>
    )
}

export default MyFetchPost;
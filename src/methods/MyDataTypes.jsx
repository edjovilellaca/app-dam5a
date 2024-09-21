function MyDataTypes() {
    const Nombre = "Edgar";
    const Apellidos = "Villela Castañeda";
    const NumControl = 20400840;
    const NumControl2 = 12345678;
    let Experiencia = 2;
    let Activo = true;

    let IdNombre = "Joel";
    IdNombre = 706;

    console.log("IdNombre: ", IdNombre);

    console.log("Nombre: ", Nombre);
    console.log("Apellidos: ", Apellidos);    
    console.log("NumControl: ", NumControl);
    console.log("NumControl2: ", NumControl2);

   
    return (
        <>
            <div>
                <h1>Programa para conocer diferentes Tipos de de Datos</h1>
                <br />
                <h1>{IdNombre}</h1>
                <br />
                <h1>{Nombre}</h1>
                <br />
                <h1>{Apellidos}</h1>
                <br />
                <h1>{NumControl}</h1>
                <br />
                <h1>{NumControl2}</h1>
                <br />
                <h1>{Experiencia}</h1>
                <br />
                <h1>{(Activo)?'Activo' : 'No Activo'}</h1>
            </div>
       
        </>
    );
};
export default MyDataTypes;
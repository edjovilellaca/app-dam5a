function MyFetchBlob(){
    
    fetch('src/images/MazingerZ-1.png')
    .then(resp => resp.blob())
    .then(image => {
        document.getElementById("IdImg1").src = URL.createObjectURL(image);
    });

    fetch('src/images/MazingerZ-2.png')
    .then(resp => resp.blob())
    .then(image => {
        document.getElementById("IdImg2").src = URL.createObjectURL(image);
    });

    return(
        <>
            <div>
                <h1>Programa para FETCH API BLOB</h1>
            </div>
        </>
    );
}

export default MyFetchBlob
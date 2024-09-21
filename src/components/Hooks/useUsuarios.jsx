import { useEffect, useRef, useState } from "react";
import reqRespApi from "../../api/reqRes";


export const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState([]);
        
    const RefPage = useRef(1);

    useEffect(() => {
        fnCargaUsuarios();
    }, []);

    const fnCargaUsuarios = async () => {
        const ficResponse = await
        reqRespApi.get('/users', {
            params: {
                page: RefPage.current
            }
        }).then(resp=> {
            if ( resp.data.data.length > 0 ) {
                setUsuarios(resp.data.data);
                RefPage.current;
            }
            else {
                alert('No hay mas registros');
            }
        })
        .catch(err => console.log(err))
    }

    const ficFnPaginaSiguiente = ()  => {
        RefPage.current ++;
        fnCargaUsuarios(); 
    }

    const ficFnPaginaAnterior = () => {
        RefPage.current --;
        fnCargaUsuarios(); 
    }

    return {usuarios, 
        ficFnPaginaAnterior,
        ficFnPaginaSiguiente}
}
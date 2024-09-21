import reqRespApi from "../api/reqRes.jsx";
import { ReqRespUsuarioListado } from "../interfaces/reqResp.jsx";
import Convert from '../interfaces/reqResp.jsx';
import { useEffect, useState, useRef } from "react";
import { useUsuarios } from './Hooks/useUsuarios.jsx';

export const Usuarios = () => {

    /* const [usuarios, setUsuarios] = useState([]);

    const RefPage = useRef(2);

    const fnCargaUsuarios = async () => {
        const ficResponse = await
        reqRespApi.get('/users', {
            params: {
                page: RefPage.current
            }
        }).then(resp=> {
            if ( resp.data.data.length > 0 ) {
                setUsuarios(resp.data.data);
                RefPage.current ++;
            }
            else {
                alert('No hay mas registros');
            }
        })
        .catch(err => console.log(err))
    }

    const CargaUsuarios  = async () => {
        reqRespApi.get('/users')
        .then(resp=> {
            setUsuarios(resp.data.data);
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        reqRespApi.get('/users')
        .then(resp=> {
            CargaUsuarios();
        })
        .catch(err => console.log(err))
        }, []) */

    const { usuarios, ficFnPaginaSiguiente, ficFnPaginaAnterior} = useUsuarios();

    const renderItem = (usuario) => {
        
        return (
            <tr key={usuario.id.toString()}>
                <td>
                    <img
                        src={ usuario.avatar }
                        alt={ usuario.first_name }
                        style={{
                            width: 50,
                            borderRadius: 100
                        }}
                    >
                    </img>
                </td>
                <td>
                    { usuario.first_name } { usuario.last_name }
                </td>
                <td>
                    { usuario.email }
                </td>
            </tr>
        )
    }

    return (
        <>
            <h3>Usuarios</h3>
            <table className = "table" border = '2'>
                <thead>
                    <tr>
                        <th>
                            Avatar
                        </th>
                        <th>
                            Nombre
                        </th>
                        <th>
                            email
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(ArgUsuario => renderItem(ArgUsuario))
                    }
                </tbody>
            </table>
            <br />
            <button onClick={ficFnPaginaAnterior}>Anterior</button>
            <br />
            <button onClick={ficFnPaginaSiguiente}>Siguiente</button>
        </>
    )
}
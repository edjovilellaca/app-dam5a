import { useEffect, useReducer } from "react";

const initialState ={
    validando: true,
    token: null,
    username: '',
    nombre: ''
};

function authReducer(state, action){

    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                username: '',
                nombre: ''
            }
        case 'login':
            const {nombre, username} = action.payload;
            return {
                validando: false,
                token: 'tokenchida123',
                username,
                nombre,
            }
        default:
            return initialState;
    }
}

export const Login = () => {

    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect( () => {
        setTimeout(() => {
            dispatch({type:'logout'});
        }, 2500);
    }, []);

    if (state.validando){
        return(
            <>
                <h1>Login</h1>
                <div className="alertInfo">
                    Validando Información...
                </div>
            </>
        );
    }

    const login = () => {
        dispatch({
            type: 'login',
            payload: { 
                username: 'yo', 
                nombre:'Joel'
            }
        });
    };

    const logout = () => {
        dispatch({ type: 'logout' });
    };

    return (
        <>
            <h1>Login</h1>
            {
                (state.token)
                ?
                (
                    <div className="alertSucces">
                        Autenticado como: { state.nombre }
                    </div> 
                )
                :
                (
                    <div className="alertDanger">
                        No Autenticado...
                    </div>
                )
            }
            {
                (state.token)
                ?
                (
                    <button className="logoutButton" onClick={logout}>
                        Logout
                    </button> 
                )
                :
                (
                    <button className="loginButton" onClick={login}>
                        Login
                    </button>
                )
            }
        </>
    )
}
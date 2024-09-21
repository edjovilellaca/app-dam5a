import { useCounter } from "./Hooks/useCounter";

export const ContadorHook  = () => {
    /* const [valor, setValor] = useState(0);

    const acumular = (numero) => {  
        setValor(valor + numero);
    }; */

    const {valor, acumular} = useCounter(100);

    return (
        <div>
            <h1>
                Aprender useState
            </h1>
           
            <h2>
                Contador Hook: <small>{valor}</small>
            </h2>

            <button onClick={() => acumular(1)}>
                    Sumar (+1)
            </button>
            &nbsp;
            <button onClick={() => acumular(-1)}>
                    Restar (-1)
            </button>
        </div>
    )
};
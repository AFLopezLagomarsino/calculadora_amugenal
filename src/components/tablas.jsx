import { cuotas} from "../hooks/func1";

export function Tabla(tasa, capital, mes){
    let resultadoCuotas = cuotas(tasa, mes, capital);

    return(
        <>
            <h2>{resultadoCuotas.cuota}</h2>
            <h2>{resultadoCuotas.gastos}</h2>
            <h2>{resultadoCuotas.neto}</h2>
            <h2>{resultadoCuotas.valorDevolucion}</h2>
        </>
    )
}

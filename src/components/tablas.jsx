import { cuotas} from "../hooks/func1";
import PropTypes from 'prop-types';

import style from './tablas.module.css'

export function Tabla({tasa, capital, mes}){
    let resultadoCuotas = cuotas(tasa, mes, capital);

    return(
        <div className={style.cont}>
            <h2>{mes}</h2>
            <h2>{resultadoCuotas.cuota.toFixed(2)}</h2>
            <h2>{resultadoCuotas.gastos.toFixed(2)}</h2>
            <h2>{resultadoCuotas.neto.toFixed(2)}</h2>
            <h2>{resultadoCuotas.valorDevolucion.toFixed(2)}</h2>
        </div>
    )
}

Tabla.propTypes = {
    tasa: PropTypes.number.isRequired,
    capital: PropTypes.number.isRequired,
    mes: PropTypes.number.isRequired,
  };
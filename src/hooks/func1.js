
const devolucion = (valorCuota,meses) => {
    const valor = (valorCuota * meses)
    return valor
}

const cuotas = (tasa, numeroPeriodos, valorActual) =>{
    const interes = tasa / (1 - Math.pow(1 + tasa, -numeroPeriodos));
    const pago = (valorActual * interes) / (1 - Math.pow(1 + interes, -numeroPeriodos));
    return pago;
}

const gastosAdm = (capitalInicial, meses) =>{

    const constante=0.9

    let capitalNum= parseInt(capitalInicial)
    let mesesNum= parseInt(meses)
    
    let gastoCiclado = (capitalNum * constante * mesesNum)/1000

    let ciclo=1

    let gastos = 0

    let gastoAnt=1

    do{
        gastoAnt=gastoCiclado

        ciclo=ciclo+1

        if(ciclo === 10){
            break
        }
        gastos = ((capitalNum+gastoAnt) * constante * mesesNum)/1000

        gastoCiclado=gastos

    }while (gastos !== gastoAnt)
    
    return gastos
}



const neto = (valorCuota) =>{
    const neto = valorCuota*100/30
    return neto
}

export {devolucion, cuotas, gastosAdm, neto}
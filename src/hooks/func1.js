export const cuotas = ({tasa, mes, capital}) =>{
    //Calculo cuotas
    let A = Math.pow(1 + tasa, mes);

    let B = (capital*tasa/30)*35
                
    const cuota = tasa * A * ((capital + B)/(A-1))

    //Calculo devolucion
    const valorDevolucion = cuota*mes

    //Calculo neto
    const neto = cuota*100/30

    //Calculo gastos Administrativos
    const constante=0.9

    let gastoCiclado = (capital * constante * mes)/1000

    let ciclo=1

    let gastos = 0

    let gastoAnt=1

    do{
        gastoAnt=gastoCiclado

        ciclo=ciclo+1

        if(ciclo === 10){
            break
        }
        gastos = ((capital+gastoAnt) * constante * mes)/1000

        gastoCiclado=gastos

    }while (gastos !== gastoAnt)

    //Retorno valores calculados
    return {cuota: cuota, 
            valorDevolucion: valorDevolucion, 
            neto: neto, 
            gastos: gastos}
}

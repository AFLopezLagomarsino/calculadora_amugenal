import { useState } from "react";
import { devolucion, cuotas, gastosAdm, neto } from "./hooks/func1";
import "./App.css";

function App() {

  const [input, setInput] = useState ({
    tasa: 0,
    capital: 0,
    mes1: 0,
    mes2: 0,
    mes3: 0
  })

  const [calculos, setCalculos] = useState ({
    1:{
    cuota: 0,
    devolucion: 0,
    gastos: 0,
    neto: 0
  },
  2:{
    cuota: 0,
    devolucion: 0,
    gastos: 0,
    neto: 0
  },
  3:{
    cuota: 0,
    devolucion: 0,
    gastos: 0,
    neto: 0
  }
  });

  function Fecha() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    console.log(input.tasa,input.capital)
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    
    let meses=[input.mes1, input.mes2, input.mes3];

    for(let i=0; i<meses.length; i++){
      let resultadoCuotas = cuotas(input.tasa, meses[i], input.capital);
      let resultadoDevolucion = devolucion(resultadoCuotas, meses[i]);
      let resultadoGastos = gastosAdm(input.capital, meses[i]);
      let resultadoNeto = neto(resultadoCuotas);

      setCalculos({
        ...calculos,
        [i+1]:{
          cuota: resultadoCuotas,
          devolucion: resultadoDevolucion,
          gastos: resultadoGastos,
          neto: resultadoNeto
        }
      })

      console.log(calculos ,meses[i])
    }
  }


  return (
    <>
      <div>
        <h1>Calculadora Amugenal</h1>
        <p>En construcción</p>
        <div>
          <p>{Fecha()}</p>
          <form onSubmit= {handleSubmit}>
          <div>
            <label id="tasa">tasa%</label>
            <input type="number" max="1" min="0" step="0.01" name="tasa" id="tasa" value={input.tasa} onChange={handleChange}/>
          </div>
          <div>
            <label id="capital"> capital </label>
            <input type="number" min="1000" step="1000" name="capital" id="capital" value={input.capital} onChange={handleChange}/>
          </div>
          <div>
            <label id="mes1">mes 1</label>
            <input type="number" name="mes1" min='1' id="mes1" value={input.mes1} onChange={handleChange}/>
          </div>
          <div>
            <label id="mes2">mes 2</label>
            <input type="number" name="mes2" min='1' id="mes2" value={input.mes2} onChange={handleChange}/>
          </div>
          <div>
            <label id="mes3">mes 3</label>
            <input type="number" name="mes3" min='1' id="mes3" value={input.mes3} onChange={handleChange}/>
          </div>
          <div>
            <button type="submit">Calcular</button>
          </div>
          </form>
        </div>
        
        <div>
          <h3>Resultado</h3>
          <div>
            <table>
              <thead>
                <tr>
                  <th>meses</th>
                    <th key='mes1'>{input.mes1}</th>
                    <th key='mes2'>{input.mes2}</th>
                    <th key='mes3'>{input.mes3}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>cuota</td>
                    <td key='cuota1'>${input.tasa!==0 && input.capital!==0 ? calculos[1].cuota : 0}</td>
                    <td key='cuota2'>${input.tasa!==0 && input.capital!==0 ? calculos[2].cuota : 0}</td>
                    <td key='cuota3'>${input.tasa!==0 && input.capital!==0 ? calculos[3].cuota : 0}</td>
                </tr>
                <tr>
                  <td>cuanto se devuelve</td>
                    <td key='dev1'>${input.tasa!==0 && input.capital!==0 ? calculos[1].devolucion : 0}</td>
                    <td key='dev2'>${input.tasa!==0 && input.capital!==0 ? calculos[2].devolucion : 0}</td>
                    <td key='dev3'>${input.tasa!==0 && input.capital!==0 ? calculos[3].devolucion : 0}</td>
                </tr>
                <tr>
                  <td>gastos administrativos</td>
                    <td key='gastos1'>${input.tasa!==0 && input.capital!==0 ? calculos[1].gastos : 0}</td>
                    <td key='gastos2'>${input.tasa!==0 && input.capital!==0 ? calculos[2].gastos : 0}</td>
                    <td key='gastos3'>${input.tasa!==0 && input.capital!==0 ? calculos[3].gastos : 0}</td>
                </tr>
                <tr>
                  <td>se transfiere</td>
                  <td key='trans1'>$</td>
                  <td key='trans2'>$</td>
                  <td key='trans3'>$</td>
                </tr>
                <tr>
                  <td>neto necesario</td>
                    <td key='neto1'>${input.tasa!==0 && input.capital!==0 ? calculos[1].neto : 0}</td>
                    <td key='neto2'>${input.tasa!==0 && input.capital!==0 ? calculos[2].neto : 0}</td>
                    <td key='neto3'>${input.tasa!==0 && input.capital!==0 ? calculos[3].neto : 0}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

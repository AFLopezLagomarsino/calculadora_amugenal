import { useState } from "react";
import { Tabla } from "./components/tablas";

import "./App.css";

function App() {

  const [input, setInput] = useState({
    tasa: 0.14,
    capital: 0,
    mes1: 0,
    mes2: 0,
    mes3: 0,
    calcular: false
  })

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
    console.log(input.tasa, input.capital)
  }

  let meses = [input.mes1, input.mes2, input.mes3];

  function handleSubmit(e) {
    e.preventDefault();
    setInput({
      ...input,
      calcular: true
    })
    console.log(input.calcular)
  }


  return (
    <div className="cont-principal">
        <div className="no-imprimir">
        <h1>Calculadora Amugenal</h1>
        <p>{Fecha()}</p>
        <form onSubmit={handleSubmit}>
          <div className="cont-inputs">
            <h4>Valores del plan: </h4>
            <div className="sub-cont">
              <div>
                <label id="tasa">Tasa de interés: </label>
                <input type="number" max="1" min="0" step="0.01" name="tasa" id="tasa" value={input.tasa} onChange={handleChange} />
              </div>
              <div>
                <label id="capital">Capital: </label>
                <input type="number" min="1000" name="capital" id="capital" value={input.capital} onChange={handleChange} />
              </div>
            </div>
            <h4>Cantidad de cuotas</h4>
            <div className="sub-cont">
              <div>
                <label id="mes1">Plan 1: </label>
                <input type="number" name="mes1" min='1' id="mes1" value={input.mes1} onChange={handleChange} />
              </div>
              <div>
                <label id="mes2">Plan 2: </label>
                <input type="number" name="mes2" min='1' id="mes2" value={input.mes2} onChange={handleChange} />
              </div>
              <div>
                <label id="mes3">Plan 3: </label>
                <input type="number" name="mes3" min='1' id="mes3" value={input.mes3} onChange={handleChange} />
              </div>
            </div>
          </div>
            <div>
              <button type="submit">Calcular</button>
            </div>
        </form>
      </div>

    <div className="area-imprimir">
      {input.calcular === true ? (
        <div>
          <h3>Resultados</h3>
          <div className="cont-resultados">
            <div className="tabla">
              <h4>Cantidad cuotas</h4>
              <h4>Valor cuotas</h4>
              <h4>Gastos Administrativos</h4>
              <h4>Neto</h4>
              <h4>Devolucion</h4>
            </div>
            {meses.map((mes, index) => (
              <Tabla key={index} tasa={parseFloat(input.tasa)} capital={parseFloat(input.capital)} mes={parseFloat(mes)} />
            ))}
          </div>
          <div className={"cont-botones no-imprimir"}>
            <button onClick={() => window.location.reload()}>Resetear</button>
            <button onClick={() => window.print()}>Imprimir</button>
          </div>
        </div>
      ) : (null)}
    </div>
    </div>
  );
}

export default App;

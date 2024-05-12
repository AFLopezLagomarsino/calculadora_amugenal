import { useState } from "react";
import { Tabla } from "./components/tablas";

import "./App.css";

function App() {

  const [input, setInput] = useState ({
    tasa: 0,
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
    console.log(input.tasa,input.capital)
  }
  
  let meses=[input.mes1, input.mes2, input.mes3];

  function handleSubmit(e) {
    e.preventDefault();
    setInput({
      ...input,
      calcular: true
    })
    console.log(input.calcular)
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
        
        {input.calcular===true?(
          <div>
            <h3>Resultados</h3>
            <div>
              {meses.map((mes, index)=>(<Tabla key={index} tasa={parseFloat(input.tasa)} capital={parseFloat(input.capital)} mes={parseFloat(mes)}/>))}
            </div>
          </div>
          ):(null)}
      </div>
    </>
  );
}

export default App;

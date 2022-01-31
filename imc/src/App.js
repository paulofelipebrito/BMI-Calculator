import './App.css';
import { useState } from 'react';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  function handleClick(){
    alert("clicou")
  }

  return (
    <div className="App">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc</span>

      <div className="area-input">
        <input 
        type="text" 
        className=""
        placeholder="Peso em (kg) Ex: 90"
        value={weight}
        onChange={ (event)=> setWeight(event.target.value)}
        />
        <input 
        type="text" 
        className=""
        placeholder="Altura em (cm) Ex: 100"
        value={height}
        onChange={ (event)=> setHeight(event.target.value)}
        />

        <button onClick={handleClick}>
          Calcular
        </button>

      </div>

      <h2>Seu IMC foi 25, você está acima do peso.</h2>

    </div>
  );
}

export default App;

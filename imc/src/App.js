import './App.css';
import { useState } from 'react';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [message, setMessage] = useState('');

  function handleClick(){
    const heightFormula = height/100;
    const imc = weight / ((height/100) * (height/100))

    if(imc < 18.6){
      setMessage("Você está abaixo do peso! Seu IMC = " + imc.toFixed(2))
    } else if(imc >= 18.6 && imc < 24.9){
      setMessage("Peso Ideal! Seu IMC = " + imc.toFixed(2))
    } else if(imc >= 24.8 && imc < 34.9){
      setMessage("Você está levemente acima do peso! Seu IMC = " + imc.toFixed(2))
    }else if(imc >= 34.9){
      setMessage("Cuidado, obesidade! Seu IMC = " + imc.toFixed(2))
    }
  }

  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <span>Let's calculate your Body Mass Index</span>

      <div className="area-input">
        
        <input 
        type="text" 
        className=""
        placeholder="Weight in (kg) e.g. 90"
        value={weight}
        onChange={ (event)=> setWeight(event.target.value)}
        />
        <input 
        type="text" 
        className=""
        placeholder="Height in (cm) e.g. 100"
        value={height}
        onChange={ (event)=> setHeight(event.target.value)}
        />

        <button onClick={handleClick}>
          Calculate
        </button>

      </div>

      <h2>{message}</h2>

    </div>
  );
}

export default App;

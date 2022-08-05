import './App.css';
import { useState } from 'react';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [message, setMessage] = useState('');

  function handleClick(){
    const heightFormula = height/100;
    const imc = weight / (heightFormula * heightFormula)

    if(imc < 18.6){
      setMessage("You are underweight! Your BMI = " + imc.toFixed(2))
    } else if(imc >= 18.6 && imc < 24.9){
      setMessage("Ideal weight! Your BMI = " + imc.toFixed(2))
    } else if(imc >= 24.8 && imc < 34.9){
      setMessage("You are slightly overweight! Your BMI = " + imc.toFixed(2))
    }else if(imc >= 34.9){
      setMessage("Be careful, obesity! Your BMI = " + imc.toFixed(2))
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

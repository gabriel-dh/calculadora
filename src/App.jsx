import React from 'react'
import { useState } from 'react';
import './App.css';
import Boton from './components/Boton';
import BotonClear from './components/BotonClear';
import Pantalla from './components/Pantalla';
//Hook

import { evaluate , prodDependencies } from 'mathjs';

function App() {


  const [ input , setInput] = useState('')

  const agregarInput = val => {
    setInput(input + val)
  }

  const calculadraResultado = () =>{
    if(input){
      setInput(evaluate(input))
    }else{
      alert("porfavor ingrese valores para realizar los calculos")
    }
  }

  return (
    <div className="App">
     
     <div className='contenedor-calculadora'>
      <Pantalla input={input}/>
      <div className="fila">
      <Boton manejarClic={agregarInput}>1</Boton>
      <Boton manejarClic={agregarInput}>2</Boton>
      <Boton manejarClic={agregarInput}>3</Boton>
      <Boton manejarClic={agregarInput}>+</Boton>
      </div>
      <div className="fila">
      <Boton manejarClic={agregarInput}>4</Boton>
      <Boton manejarClic={agregarInput}>5</Boton>
      <Boton manejarClic={agregarInput}>6</Boton>
      <Boton manejarClic={agregarInput}>-</Boton>
      </div>
      <div className="fila">
      <Boton manejarClic={agregarInput}>7</Boton>
      <Boton manejarClic={agregarInput}>8</Boton>
      <Boton manejarClic={agregarInput}>9</Boton>
      <Boton manejarClic={agregarInput}>*</Boton>
      </div>
      <div className="fila">
      <Boton manejarClic={calculadraResultado}>=</Boton>
      <Boton manejarClic={agregarInput}>0</Boton>
      <Boton manejarClic={agregarInput}>/</Boton>
      <Boton manejarClic={agregarInput}>+</Boton>
      </div>

     </div>
    </div>
  );
}

export default App;

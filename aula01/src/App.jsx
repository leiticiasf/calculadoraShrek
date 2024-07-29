import { useState } from 'react'

import './App.css'

function App() {
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
     const [resultado, setResultado] = useState("resultado");


    function soma(){
       let soma = Number(num1) + Number(num2);
       setResultado(soma)
    }
    function subtracao(){
      let subtracao = Number(num1) - Number(num2);
      setResultado(subtracao)
   }

   function divisao(){
    let divisao = Number(num1) / Number(num2);
    setResultado(divisao)
 }

 function multiplicacao(){
  let multiplicacao  = Number(num1) * Number(num2);
  setResultado(multiplicacao)
}



  return (
    <>
     <h1>Calculadora</h1>
     <input type='number' value={num1}   onChange={(e) => setNum1(e.target.value)}  placeholder='insira um numero'></input> &nbsp;
     <input type='number' value={num2} onChange={(e) => setNum2(e.target.value)} placeholder='insira um numero'></input> <br/><br/>
     <br/>   <button onClick={soma}> Soma</button>&nbsp;  
            <button   onClick={subtracao}> Subtração </button>&nbsp;
             <button  onClick={divisao}> Divisão </button>&nbsp;
              <button onClick={multiplicacao}> Multiplicação</button>

           <br/>   <h2 id='resultado'> {resultado} </h2>
    </>
  )
}

export default App

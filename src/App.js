import React from 'react'
import "./App.css"
import ArrayData from './Components/arrayData';
import LoginForm from './Components/LoginForm';
import UseStateComp from './Components/useState';
// console.log(document.querySelectorAll('a img')[0].getAttribute("src"));

function App() {

  // console.log(useState('initialVal'));


  return (
    <div className="App">
      {/* <UseStateComp/>
      <hr/>
      <ArrayData/> */}
      <LoginForm/>
    </div>
  )
}

export default App


import React from 'react'
import '../styles/App.css';
const App = () => {

  // do not change the code inside the function clickA
  const clickA = () =>{
    console.log('Clicked button A')
  }
  return (
    <div id="main">
      <button onClick={clickA} id="button-a">Button A</button>
    </div>
  )
}


export default App;

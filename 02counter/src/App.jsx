import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCount] = useState(2)

  function addvalue() {
    console.log("the avale is ", Math.random() * 100)
    setCount(counter + 1)

  }

  function removevalue() {


    setCount(counter -1)
  }


  if(counter === 0 ){
    !addvalue()
  }
  if(counter ===20){
    !removevalue()
  }
  
  return (

    <div>

      <h1>this is the react</h1>
      <h2>counter value : {counter}</h2>

      <button onClick={addvalue}>add valu{counter}</button>
      <button onClick={removevalue}>remove value</button>

    </div>
  )
}

export default App

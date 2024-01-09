import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, adding] = useState(0)
function increase(){
// adding(count + 1)
// adding(count + 1)
// adding(count + 1)
// adding(count + 1)
// adding(count + 1)
// adding(count + 1)// it will provide the 16 it cant be increse 
//reson is the it get in the pakeges than the it same value conside by the usesttate 
// usestate is geve the value in the p=bachess

//*(how this you can do )

adding(prevconter =>prevconter +1)
adding(prevconter =>prevconter +1)
adding(prevconter =>prevconter +1)
adding(prevconter =>prevconter +1)
adding(prevconter =>prevconter +1)
//it will provide 5 after clicking 10 value reflected
//adding i s in callbake function have in that 
}


function decrease(){
  adding(count -1)
}
  return (
    <>
     
     <h1 className='text-black '>this is the react</h1>
     
     <button onClick={increase}>
       increase{count}
     </button>
     <button onClick={decrease}>
      decrease{count}
     </button>
     
    </>
  )
}

export default App

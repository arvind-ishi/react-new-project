import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('black')
  return (


    <div className="w-full h-screen dutation-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        {/* 1 */}
        <div className="flex flex-wrap justify-center gap-3 shadow-lg  bg-white rounded-full px-3 py-2 ml-2 mr-2 ">
          <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "red" }}>red</button>
        </div>
        {/* 2 */}
        <div className="flex flex-wrap justify-center gap-3 
                  shadow-lg  bg-white rounded-full px-3 py-2 ml-2 mr-2">
          <button onClick={() => setColor("black")}
            className='outline-none px-4 py-1 rounded-full 
              text-white shadow-lg' style={{
              backgroundColor:
                "black"
            }}>black</button>
        </div>
        {/* 3 */}
        <div className="flex flex-wrap justify-center gap-3 
                shadow-lg  bg-white rounded-full px-3 py-2  ml-2 mr-2">
          <button onClick={() => setColor("white")}
            className='outline-none px-4 py-1 rounded-full 
           text-black shadow-lg' style={{
              backgroundColor:
                "white"
            }}>white</button>
        </div>
        {/* 4 */}

        <div className="flex flex-wrap justify-center gap-3 
              shadow-lg  bg-white rounded-full px-3 py-2  ml-2 mr-2">
          <button onClick={() => setColor("green")}
            className='outline-none px-4 py-1 rounded-full 
          text-white shadow-lg' style={{
              backgroundColor:
                "green"
            }}>green</button>
        </div>
        {/* 5 */}
        <div className="flex flex-wrap justify-center gap-3 
              shadow-lg  bg-white rounded-full px-3 py-2  ml-2 mr-2">
          <button onClick={() => setColor("yellow")}
            className='outline-none px-4 py-1 rounded-full 
            text-black shadow-lg' style={{
              backgroundColor:
                "yellow"
            }}>yellow</button>
        </div>



        {/* 6 */}
        <div className="flex flex-wrap justify-center gap-3 
               shadow-lg  bg-white rounded-full px-3 py-2 ml-2 mr-2">
          <button onClick={() => setColor("pink")}
            className='outline-none px-4 py-1 rounded-full 
             text-black shadow-lg' style={{
              backgroundColor:
                "pink"
            }}>pink</button>
        </div>
        {/* 7 */}
        <div className="flex flex-wrap justify-center gap-3 
               shadow-lg  bg-white rounded-full px-3 py-2  ml-2 mr-2">
          <button onClick={() => setColor("olive")}
            className='outline-none px-4 py-1 rounded-full 
              text-white shadow-lg' style={{
              backgroundColor:
                "olive"
            }}>olive</button>
        </div>
{/* 8 */}
        <div className="flex flex-wrap justify-center gap-3 
            shadow-lg  bg-white rounded-full px-3 py-2  
         ml-2 mr-2">
          <button onClick={() => setColor("purple")}
            className='outline-none px-4 py-1 rounded-full 
               text-white shadow-lg' style={{
              backgroundColor:
                "purple"
            }}>purple</button>
        </div>
{/* 9 */}
        <div className="flex flex-wrap justify-center gap-3 
        shadow-lg  bg-white rounded-full px-3 py-2  
            ml-2 mr-2">
          <button onClick={() => setColor("gray")}
            className='outline-none px-4 py-1 rounded-full 
                text-white shadow-lg' style={{
              backgroundColor:
                "gray"
            }}>gray</button>
        </div>
{/* 10 */}
        <div className="flex flex-wrap justify-center gap-3 
        shadow-lg  bg-white rounded-full px-3 py-2  
           ml-2 mr-2">
          <button onClick={() => setColor("blue")}
            className='outline-none px-4 py-1 rounded-full 
             text-white shadow-lg' style={{
              backgroundColor:
                "blue"
            }}>blue</button>
        </div>



      </div>
    </div>
  )

}

export default App

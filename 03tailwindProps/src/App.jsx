import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
import Cardone from './componet/cards'
function App() {
  const [count, setCount] = useState(0)
let myobj = {
  name:"hitesh",
  age :55

}

let myArr = [1,2,3,4,5];

  return (
    <>
      <Card om='OM Nam shivay '  />

      <Card om='om om nam shivay'  />
  
      <Card om='shivay is the best '/>

      <Card  om='shivay is everyhing'/>
      <h1 className='bg-sky-500/75 text-black p-4  text-lx rounded-xl mb-4 mt-4' >tailwind css </h1>


      <div class="relative h-[400px] w-[300px] rounded-md mb-4">
        <img
          src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="AirMax Pro"
          class="z-0 h-full w-full rounded-md object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div class="absolute bottom-4 left-4 text-left">
          <h1 class="text-lg font-semibold text-white">Delba</h1>
          <p class="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            View Profile →
          </button>
        </div>
      </div>


<Cardone chayanal='arvind jadhav'  about='new laptop car'/>
<Cardone chayanal='chaiaurcode' myobjone = {myobj} myarrone = {myArr}/>
<Cardone chayanal='chaiaurcode' />
<Cardone laptop='carraide'/>
<Cardone/>
<Cardone botton='read all second'/>
<Cardone/>


    </>
  )
}

export default App

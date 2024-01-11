import { useCallback, useState, useEffect ,useRef} from 'react'




function App() {
  const [length, setLength] = useState(8)

  const [number, setNumber] = useState(false)

  const [char, setChar] = useState(false)

  const [password, setPassword] = useState("")



  const passwordGenerator = useCallback(function () {

    let pass = ''
    let str = 'ABCDEFGHIJKLMINOPQRSUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (number) str += "1234567890";
    if (char) str += "!@#$%&^*()_+=_-{}|:><,.?/~`"

    for (let i = 1; i <= length; i++) {
      let cha = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(cha)
    }

    setPassword(pass)


  }, [length, number, char, setPassword])
  const paswordref = useRef(null);

const copypassword =useCallback(()=>{

  paswordref.current?.select()

window.navigator.clipboard.writeText(password)

},[password])
  



  useEffect(() => {
    passwordGenerator()
  }, [length, number, char, setPassword,passwordGenerator])


  return (


    <div className='w-full max-w-md mx-auto  shadow-md rounded-md px-4 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'>password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mt-4 ">

        <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={paswordref}

        />
        <button onClick={copypassword} className='outline-none bg-blue-700 text-white py-0.5 px-3 shrink-0'>copy</button>
      </div>
      <div className="flex text-sm gap-x-2 mt-4  ">
        <div className="flex items-center gap-x-1 range-blue-700">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursur-pointer  text-blue-700'
            onChange={(event) => { setLength(event.target.value) }}
          />
          <label >length: {length}</label>

        </div>

        <div className="flex items-center gap-x-1">

          <input
            type="checkbox"
            defaultChecked={number}
            id='numberInput'
            onChange={
              () => {
                setNumber((prev) => !prev);

              }
            }
          />
          <label htmlFor="numberInput">number</label>
        </div>


        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={char}
            id='charInput'
            onChange={
              () => {
                setChar((prev) => !prev);
              }
            }
          />
          <label htmlFor="charInput">charecter</label>
        </div>
      </div>
    </div>




  )
}

export default App

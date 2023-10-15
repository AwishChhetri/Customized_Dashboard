import React from 'react'
import { useState } from 'react'

function Form({change,hide_form}) {

    const [color1,setColor1] = useState('')
    const [color2,setColor2] = useState('')
    const [color3,setColor3] = useState('')

    const [show,setShow] = useState(false)

  return (
    <div className='flex'>
        <div className='m-3'>
            <h1>Box-1 color : </h1>
            <input type="text" placeholder="Enter color" className='p-3 border-2' val={color1} onChange={(e)=>setColor1(e.target.value)}/>
        </div>
        <div className='m-3'>
            <h1>Box-2 color : </h1>
            <input type="text" placeholder="Enter color" className='p-3 border-2' val={color2} onChange={(e)=>setColor2(e.target.value)}/>
        </div>
        <div className='m-3'>
            <h1>Box-3 color : </h1>
            <input type="text" placeholder="Enter color" className='p-3 border-2' val={color3} onChange={(e)=>setColor3(e.target.value)}/>
        </div>
        <div className=' flex m-6'>
            <button className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75' onClick={async()=>{
                change(color1,color2,color3)
                setShow(true)
                }}>
                Apply changes
            </button>
            {show && <button onClick={hide_form} className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>Go Back</button>}
        </div>
    </div>
  )
}

export default Form
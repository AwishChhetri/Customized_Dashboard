import '../css/dash.css'
import { useState } from 'react'
import Form from '../components/form'
import Profile from '../components/Profile'

import SideBar from "../components/SideBar"
const Dash = () => {
<<<<<<< HEAD
  return (
    
   <div className="bg-gradient-to-t from-white via-purple-100 to-indigo-200 h-screen p-0 m-0">
    <SideBar />
    
    
||||||| ef020f0
  return (
    
    <div className="flex  justify-center bg-gradient-to-r from-black h-screen text-white flex-col items-center">
    <div className=" pt-12 bg-gradient-to-br from-slate-50 w-full h-full text-center">
        hello me header
        </div>
   <div className=" ">
   <h1 className="font-blue-700 text-m rounded-md bg-gradient-to-r from-red-400 p-5 mt-5 mb-7 w-64 text-center item-center">
        Name bro
    </h1>
    <p className="mt-2 font-bold  w-92 bg-gradient-to-l from-purple-600  p-12 items-center">hello mam how are you i am fine how are you</p>
     
     <button className="mt-10 bg-gradient-to-tr from-black text-white p-4 w-40">
        button
     </button>
   </div>
=======
>>>>>>> 1df8163262c4f0042e3f11a2a90ac1962786c336

<<<<<<< HEAD
    
   </div>
||||||| ef020f0
   <div className=" pt-12 bg-gradient-to-l from-amber-600 w-full h-full text-center">
        hello me footer
        </div>
    </div>
=======
  const [box1,setBox1] = useState('p-6 bg-blue-700 m-6')
  const [box2,setBox2] = useState('p-6 bg-blue-700 m-6')
  const [box3,setBox3] = useState('p-6 bg-blue-700 m-6')

  const [val1,setVal1] = useState(true)
  const [val2,setVal2] = useState(false)

  const Change = (color1,color2,color3)=>{
    console.log(color1,color2,color3)
    setBox1(`p-6 bg-${color1}-700 m-6`)
    setBox2(`p-6 bg-${color2}-700 m-6`)
    setBox3(`p-6 bg-${color3}-700 m-6`)
  }

  const Show_form = ()=>{
    setVal1(false)
    setVal2(true)
  }

  const Hide_form = ()=>{
    setVal1(true)
    setVal2(false)
  }


  return (
    <div className="bg-green-200">
      {val1 && <Profile box1={box1} box2={box2} box3={box3} show_form={Show_form}/>}
      {val2 && <Form change={Change} hide_form={Hide_form}/>}
      {console.log(val1)}
      {console.log(val2)}
    </div>
>>>>>>> 1df8163262c4f0042e3f11a2a90ac1962786c336
  )
}

export default Dash

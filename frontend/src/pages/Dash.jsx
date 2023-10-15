import '../css/dash.css'
import { useState } from 'react'
import Form from '../components/form'
import Profile from '../components/Profile'
import 'tailwindcss/tailwind.css'

const Dash = () => {

  const [box1,setBox1] = useState('p-6 bg-blue-700 m-6')
  const [box2,setBox2] = useState('p-6 bg-blue-700 m-6')
  const [box3,setBox3] = useState('p-6 bg-blue-700 m-6')

  const [val1,setVal1] = useState(true)
  const [val2,setVal2] = useState(false)


  const Change = async(color1,color2,color3)=>{
    console.log(color1,color2,color3)
    setBox1(`p-6 bg-${color1}-700 m-6`)
    setBox2(`p-6 bg-${color2}-700 m-6`)
    setBox3(`p-6 bg-${color3}-700 m-6`)
    console.log(color1,color2,color3)
  }

  const Show_form = ()=>{
    setVal1(false)
    setVal2(true)
  }

  const Hide_form = async()=>{
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
  )
}

export default Dash

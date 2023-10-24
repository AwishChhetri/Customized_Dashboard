import React, { useState } from 'react'
import Dashboard from '../components/dash'
import About from '../components/about'
import SideBar from '../components/SideBar'
import Custom from '../components/custom'

function Dash() {

  const [dash,setDash] = useState(true)
  const [about,setAbout] = useState(false)
  const [custom,setCustom] = useState(false)


  const showDash = ()=>{
    setDash(true)
    setAbout(false)
    setCustom(false)
  }

  const showAbout = ()=>{
    setAbout(true)
    setDash(false)
    setCustom(false)
  }

  const showCustom = ()=>{
    setCustom(true)
    setDash(false)
    setAbout(false)
  }

  return (
    <div className='bg-gradient-to-t from-white via-purple-100 to-indigo-200'>
        <SideBar showAbout={showAbout} showDash={showDash} showCustom={showCustom}/>
        {dash && <Dashboard/>}
        {about && <About/>}
        {custom && <Custom showDash={showDash}/>}
    </div>
  )
}

export default Dash



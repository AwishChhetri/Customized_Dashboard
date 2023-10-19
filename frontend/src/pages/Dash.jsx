import React, { useState } from 'react'
import Dashboard from '../components/dash'
import About from '../components/about'
import SideBar from '../components/SideBar'

function Dash() {

  const [dash,setDash] = useState(true)
  const [about,setAbout] = useState(false)


  const showDash = ()=>{
    console.log(" from showdash->For dash : ",dash)
    console.log(" from showdash->For about : ",about)
    setDash(true)
    setAbout(false)
  }

  const showAbout = ()=>{
    console.log(" from showabout->For dash : ",dash)
    console.log(" from showabout->For about : ",about)
    setAbout(true)
    setDash(false)
  }

  return (
    <div className='bg-gradient-to-t from-white via-purple-100 to-indigo-200'>
        <SideBar showAbout={showAbout} showDash={showDash}/>
        {dash && <Dashboard/>}
        {about && <About/>}
    </div>
  )
}

export default Dash



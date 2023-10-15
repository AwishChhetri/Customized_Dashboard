import React from 'react'
import { Link } from 'react-router-dom'
import Profile_image from '../assets/profile.jpeg'

function Profile({box1,box2,box3,show_form}) {

  return (
    <div>
        <img className='object-scale-down h-48 w-96 rounded-full w-32 h-32' src={Profile_image}/>
      <div>
      <h1 className='text-6xl text-center italic text-red-400'>Yashwant</h1>
        <p className='text-4xl text-center text-violet-800'>Student</p>
        <ul className='Profile'>
          <Link className='bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 p-3 m-6'>Achievements</Link>
          <Link className='bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 p-3 m-6'>Skills</Link>
          <Link className='bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 p-3 m-6' onClick={show_form}>Customize Profile</Link>
        </ul>
      </div>
      <div className={box1}>Box1</div>
      <div className={box2}>Box2</div>
      <div className={box3}>Box3</div>
    </div>
  )
}

export default Profile
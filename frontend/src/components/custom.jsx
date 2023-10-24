import React, { useState } from 'react';
import { useParams } from "react-router-dom"
import Header from './header.jsx';
import axios from "axios";

const Preference = (props) => {

  const { id } = useParams()

  const [text,setText] = useState('')
  const [back,setBack] = useState('')
   
  const showcolors = ()=>{
    axios.post('http://localhost:5000/colors',{
      textColor : text,
      backgroundColor: back,
      userId: id
    })
    .then((res)=>{
      console.log(res.data.msg)
      props.showDash()
    })
    .catch((err)=>{
      console.log("error in saving colors -> ",err)
    })
  }

  return (
      <div className='p-4 sm:ml-64 font-one bg-gradient-to-t from-white via-purple-100 to-indigo-200'>
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <Header/>
          <div className="grid grid-cols-2 gap-4 mb-4 ">
            <div className="flex items-center flex-col justify-center rounded  h-28  ">
              Choose color for text :
              <p className="">
              <input type="radio" name='text' onClick={()=>setText('red')}/>RED<br/>
              <input type="radio" name='text' onClick={()=>setText('green')}/>GREEN<br/>
              <input type="radio" name='text' onClick={()=>setText('blue')}/>BLUE
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded  h-28 ">
              Choose color for background :
              <p className="">
              <input type="radio" name='background' onClick={()=>setBack('pink')}/>PINK<br/>
              <input type="radio" name='background' onClick={()=>setBack('yellow')}/>YELLOW<br/>
              <input type="radio" name='background' onClick={()=>setBack('orange')}/>ORANGE
              </p>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <button className='block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring' onClick={()=>showcolors()}>
              Apply Changes</button>
          </div>
        </div>
      </div>
  );
};

export default Preference;

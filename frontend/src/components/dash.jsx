import Radiobutton from "./Radiobutton"
import SideBar from "./SideBar"
import DropDown from "./dropdown"
import Footer from '../components/footer.jsx'
import Header from '../components/header.jsx'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios";
const HeroPage = () => {
  const { id } = useParams()

  const [mail,setMail] = useState('')
  const [name,setName] = useState('')

  useEffect(()=>{
    axios.get(`http://localhost:5000/user/${id}`)
    .then((res)=>{
      setMail(res.data.mail)
      setName(res.data.name)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])


  return (
    <div  className="bg-gradient-to-t from-white via-purple-100 to-indigo-200">
      <div className="p-4 sm:ml-64 font-one bg-gradient-to-t from-white via-purple-100 to-indigo-200">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <Header name={name}/>
          <div className="grid grid-cols-2 gap-4 mb-4 ">
            <div className="flex items-center flex-col justify-center rounded  h-28  ">
              <p className="lg:text-2xl">My email:{mail}</p>
              <p className=" flex   font-two lg:flex-row lg:text-sm sm:text-xs flex-col sm:text-clip sm:overflow-auto  text-black ">
                <Radiobutton name="Indian" />
                <Radiobutton name="Homosapien" />
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded  h-28 ">
              <p className="lg:text-2xl">Id:{id}</p>
              <p className="lg:text-sm font-two text-black  flex flex-col ">
                <DropDown
                  name="Languages"
                  option1="Hindi"
                  option2="English"
                  option3="Japanese"
                />
              </p>
            </div>
          </div>
          
        </div>

        <Footer/>
      </div>
    </div>
  );
};

export default HeroPage;

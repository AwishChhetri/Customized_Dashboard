import Radiobutton from "./Radiobutton"
import DropDown from "./dropdown"
import Footer from '../components/footer.jsx'
import Hero from '../components/hero'
import Header from '../components/header.jsx'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios";
import LoadColors from '../components/colors'
import Loading from "./loading"

const HeroPage = () => {

  LoadColors()

  const { id } = useParams()
  const [mail,setMail] = useState('')
  const [name,setName] = useState('')
  const [loading,setLoading] = useState(true)

  const [button,setButton] = useState('block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-purple-500 transition hover:bg-indigo-700 focus:outline-none focus:ring')
  const [header,setHeader] = useState('')
  const [footer,setFooter] = useState('')
  const [dropdown,setDropdown] = useState('')
  const [radio,setRadio] = useState('')
  const [theme1,setTheme1] = useState('')
  const [theme2,setTheme2] = useState('')
  const [theme3,setTheme3] = useState('')

  useEffect(()=>{
    axios.get(`http://localhost:5000/user/${id}`)
    .then((res)=>{
      setMail(res.data.email)
      setName(res.data.username)
      changeUI(
        res.data.textColor,res.data.buttonBackgroundColor,
        res.data.headerBackgroundColor,res.data.footerBackgroundColor,
        res.data.dropDownButtonColor,res.data.radioButtonColor,
        res.data.themeColor1,res.data.themeColor2,res.data.themeColor3
        )
      setLoading(false)
    })
    .catch((err)=>{
      console.log(err)
    })

    const changeUI = (textcolor,backcolor,header,footer,drop,radio,theme1,theme2,theme3)=>{
      setButton(`block rounded-lg bg-${backcolor}-600 px-5 py-3 text-sm font-medium text-${textcolor}-500 transition hover:bg-indigo-700 focus:outline-none focus:ring`)
      setHeader(`bg-${header}-200`)
      setFooter(`bg-${footer}-200`)
      setDropdown(`bg-${drop}-200`)
      setRadio(`bg-${radio}-200`)
      setTheme1(`${theme1}`)
      setTheme2(`${theme2}`)
      setTheme3(`${theme3}`)
    }
  },[])


  return (
    <>
      {loading && <Loading/>}
      {!loading && <div  className="bg-gradient-to-t from-white via-purple-100 to-indigo-200">
        <div className={`p-4 sm:ml-64 font-one bg-gradient-to-t from-${theme1}-200 via-${theme2}-1200 to-${theme3}-200`}>
          <div className={`p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 ${header}`}>
            <Header name={name} button={button}/>
          </div>
          <Hero/>
          <div className="grid grid-cols-2 gap-4 mb-4 ">
              <div className="flex items-center flex-col justify-center rounded  h-28  ">
                <p className="lg:text-2xl">My email:{mail}</p>
                <p className=" flex   font-two lg:flex-row lg:text-sm sm:text-xs flex-col sm:text-clip sm:overflow-auto  text-black ">
                  <Radiobutton name="Indian" radio={radio}/>
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
                    drop={dropdown}
                  />
                </p>
              </div>
            </div>
          <Footer foot={footer}/>
        </div>
      </div>}
    </>
    
  );
};

export default HeroPage;

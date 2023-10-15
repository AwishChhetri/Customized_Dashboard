import SideBar from "../components/SideBar"
import Heropage from '../components/HeroPage'
import About from '../components/about'
import { Route,Routes } from "react-router-dom"

const Dash = () => {
  return (
    <div className="bg-gradient-to-t from-white via-purple-100 to-indigo-200">
      <SideBar/>
    </div>
  )
}

export default Dash



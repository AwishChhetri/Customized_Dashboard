import Radiobutton from "./Radiobutton";
import SideBar from "./SideBar";
import DropDown from "./dropdown";
import { useUser } from '../pages/demoAccount.jsx';
import Footer from '../components/footer.jsx';
import Header from '../components/header.jsx'
const HeroPage = () => {
  const { user } = useUser();

  return (
    <div  className="bg-gradient-to-t from-white via-purple-100 to-indigo-200">
      <SideBar/>
      <div className="p-4 sm:ml-64 font-one bg-gradient-to-t from-white via-purple-100 to-indigo-200">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <Header/>
          <div className="grid grid-cols-2 gap-4 mb-4 ">
            <div className="flex items-center flex-col justify-center rounded  h-28  ">
              <p className="lg:text-2xl">My email:{user.email}</p>
              <p className=" flex   font-two lg:flex-row lg:text-sm sm:text-xs flex-col sm:text-clip sm:overflow-auto  text-black ">
                <Radiobutton name="Indian" />
                <Radiobutton name="Homosapien" />
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded  h-28 ">
              <p className="lg:text-2xl">Id:{user._id}</p>
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

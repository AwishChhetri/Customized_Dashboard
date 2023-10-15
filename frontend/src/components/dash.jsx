import Radiobutton from "./Radiobutton";
import SideBar from "./SideBar";
import DropDown from "./dropdown";

const HeroPage = () => {
  return (
    <div>
      <SideBar/>
      <div className="p-4 sm:ml-64 font-one">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p className="  lg:text-7xl sm:text-3xl text-black ">
              Hey Pratap This Side !
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4 ">
            <div className="flex items-center flex-col justify-center rounded bg-gray-50 h-28 dark:bg-gray-800 ">
              <p className="lg:text-2xl">My Nationality</p>
              <p className=" flex   font-two lg:flex-row lg:text-sm sm:text-xs flex-col sm:text-clip sm:overflow-auto  text-black ">
                <Radiobutton name="Indian" />
                <Radiobutton name="Homosapien" />
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="lg:text-2xl">Languages I Speak !</p>
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
          <div className="flex items-center justify-center lg:h-72 mb-4 rounded bg-gray-50 dark:bg-gray-800 p-6">
            <p className="lg:text-xl sm:text-sm text-black font-two text-lg ">
              "Embrace the Stoic virtues of wisdom, courage, and resilience as
              guiding beacons in the modern world. Remember, in a sea of change
              and chaos, your inner character remains steadfast and under your
              control. Let reason be your rudder, integrity your sail, and
              justice your compass. Find serenity in the face of turmoil and
              strength amidst challenges. As Pratap, I encourage you to navigate
              life's uncertainties with a Stoic mindset, fostering a global
              community rooted in wisdom, empathy, and unwavering moral
              principles. Together, we can transcend adversity and emerge as
              beacons of resilience and virtue in an ever-changing world."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;

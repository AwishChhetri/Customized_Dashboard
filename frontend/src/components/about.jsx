import Logo from "../assets/logo.png";
import SideBar from "./SideBar";
const About = () => {
  return (
    <div className="bg-gradient-to-t from-white via-purple-100 to-indigo-200">
      <SideBar/>
      <div className="p-4 sm:ml-64 font-one">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className="flex  flex-col items-center justify-center h-screen mb-4 rounded bg-gray-50 dark:bg-gray-800 p-6">
            <img src={Logo} alt="image" className="h-64" />
            <p className="text-2xl text-black font-two text-lg sm:text-xs ">
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

export default About;

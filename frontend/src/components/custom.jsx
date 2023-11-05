import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./header.jsx";
import axios from "axios";

const Preference = (props) => {
  const { id } = useParams();

  const [text, setText] = useState("");
  const [back, setBack] = useState("");
  const [headbg, setHeadbg] = useState("");
  const [footbg, setFootbg] = useState("");
  const [radio, setRadio] = useState("");
  const [drop, setDrop] = useState("");
  const [theme1, setTheme1] = useState("");
  const [theme2, setTheme2] = useState("");
  const [theme3, setTheme3] = useState("");

  const showcolors = () => {
    axios
      .post("http://localhost:5000/colors", {
        textColor: text,
        buttonbackgroundColor: back,
        headerBackgroundColor: headbg,
        footerBackgroundColor: footbg,
        radioButtonColor: radio,
        dropDownButtonColor: drop,
        themeColor1: theme1,
        themeColor2: theme2,
        themeColor3: theme3,
        userId: id,
      })
      .then((res) => {
        console.log(res.data.msg);
        props.showDash();
      })
      .catch((err) => {
        console.log("error in saving colors -> ", err);
      });
  };

  return (
    <>
      <div className="ml-300px mx-auto max-w-screen-x3 px-4 py-16   sm:px-6 lg:pl-72 justify-center">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-center text-2xl font-bold font-one text-black sm:text-3xl">
            Start Customizing
          </h1>

          <p className="mx-auto mt-4 max-w-md font-two text-center text-white">
            Fill the form to set your preference. Which will be reflected in
            your dashboard.
          </p>

          <form
            action=""
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium font-two text-indigo-800"> Let's Change it!</p>

            <label htmlFor="email" className="sr-only">
              {" "}
              Choose color for text :
            </label>

            <div className="grid grid-cols-2 gap-4 mb-4 font-one">
              <div className="flex items-center flex-col justify-center rounded  h-52  ">
                Choose color for text :
                <p className="mt-2">
                <div className="flex ">
                  <input
                    type="radio"
                    name="text"
                    onClick={() => setText("red")}
                  />
                  <div className=
                  "m-0 ml-2 p-0  h-5 w-24 bg-red-400">
                  </div>
                  </div>
                  <br />
                  <div className="flex ">
                  <input
                    type="radio"
                    name="text"
                    onClick={() => setText("green")}
                  />
                  <div className=
                  "m-0 ml-2 p-0  h-5 w-24 bg-green-400">
                  </div>
                  </div>
                  <br />
                  <div className="flex ">
                  <input
                    type="radio"
                    name="text"
                    onClick={() => setText("blue")}
                  />
                 <div className=
                  "m-0 ml-2 p-0  h-5 w-24 bg-blue-400">
                  </div>
                  </div>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center rounded  h-52 ">
                Choose background color :
                <p className="mt-2">
                <div className="flex m-1">
                  <input
                    type="radio"
                    name="background"
                    onClick={() => setBack("pink")}
                  />
                  <div className=
                  "m-0 ml-2 p-0  h-5 w-24 bg-pink-400">
                  </div>
                  </div>
                  <br />
                  <div className="flex m-1">
                  <input
                    type="radio"
                    name="background"
                    onClick={() => setBack("yellow")}
                  />
                  <div className=
                  "m-0 ml-2 p-0  h-5 w-24 bg-yellow-400">
                  </div>
                  </div>
                  <br />
                  <div className="flex m-1 ">
                  <input
                    type="radio"
                    name="background"
                    onClick={() => setBack("orange")}
                  />
                  <div className=
                  "m-0 ml-2 p-0  h-5 w-24 bg-orange-400">
                  </div>
                  </div>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center rounded  h-52 ">
                Choose color for Header :
                <p className="mt-2">
                <div className="flex m-1">
                  <input
                    type="radio"
                    name="header"
                    onClick={() => setHeadbg("pink")}
                  />
                  <div className=
                  "m-0 ml-2 p-0  h-5 w-24 bg-pink-400">
                  </div>
                  </div>
                  <br />
                  <div className="flex m-1 ">
                  <input
                    type="radio"
                    name="header"
                    onClick={() => setHeadbg("yellow")}
                  />
                   <div className=
                  "m-0 ml-2 p-0  h-5 w-24 bg-yellow-400">
                  </div>
                  </div>
                  <br />
                  <div className="flex m-1">
                  <input
                    type="radio"
                    name="header"
                    onClick={() => setHeadbg("orange")}
                  />
                  <div className=
                  "m-0 ml-2 p-0  h-5 w-24 bg-orange-400">
                  </div>
                  </div>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center rounded  h-52 ">
                Choose color for Footer :
                <p className="mt-2">
                <div className="flex m-1">
                  <input
                    type="radio"
                    name="footer"
                    onClick={() => setFootbg("pink")}
                  />
                  <div className=
                  "m-0 ml-2 p-0  h-5 w-24 bg-pink-400">
                  </div>
                  </div>
                  <br />
                  <div className="flex m-1">
                  <input
                    type="radio"
                    name="footer"
                    onClick={() => setFootbg("yellow")}
                  />
                  <div className=
                  "m-0 ml-2 p-0  h-5 w-24 bg-yellow-400">
                  </div>
                  </div>
                  <br />
                  <div className="flex m-1">
                  <input
                    type="radio"
                    name="footer"
                    onClick={() => setFootbg("orange")}
                  />
                  <div className=
                  "m-0 ml-2 p-0  h-5 w-24 bg-orange-400">
                  </div>
                  </div>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center rounded  h-52 ">
                Choose color for Radio Button :
                <p className="mt-2">
                <div className="flex m-1">
                  <input
                    type="radio"
                    name="radio"
                    onClick={() => setRadio("pink")}
                  />
                  <div className=
                  "m-0 ml-2 p-0  h-5 w-24 bg-pink-400">
                  </div>
                  </div>
                  <br />
                  <div className="flex m-1 ">
                  <input
                    type="radio"
                    name="radio"
                    onClick={() => setRadio("yellow")}
                  />
                  <div className=
                  "m-0 ml-2 p-0  h-5 w-24 bg-yellow-400">
                  </div>
                  </div>
                  <br />
                  <div className="flex m-1">
                  <input
                    type="radio"
                    name="radio"
                    onClick={() => setRadio("orange")}
                  />
                  <div className=
                  "m-0 ml-2 p-0  h-5 w-24 bg-orange-400">
                  </div>
                  </div>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center rounded  h-52 ">
                Choose color for Dropdownbutton:
                <p className="mt-2">
                <div className="flex m-1">
                  <input
                    type="radio"
                    name="drop"
                    onClick={() => setDrop("pink")}
                  />
                  <div className=
                  "m-0 ml-2 p-0  h-5 w-24 bg-pink-400">
                  </div>
                  </div>
                  <br />
                  <div className="flex m-1">
                  <input
                    type="radio"
                    name="drop"
                    onClick={() => setDrop("yellow")}
                  />
                  <div className=
                  "m-0 ml-2 p-0  h-5 w-24 bg-yellow-400">
                  </div>
                  </div>
                  <br />
                  <div className="flex m-1">
                  <input
                    type="radio"
                    name="drop"
                    onClick={() => setDrop("orange")}
                  />
                  <div className=
                  "m-0 ml-2 p-0  h-5 w-24 bg-orange-400">
                  </div>
                  </div>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center rounded  h-52 ">
                Choose color for Theme gradient :
                <p className="mt-2">
                <div className="flex m-1">
                  <input
                    type="radio"
                    name="theme1"
                    onClick={() => setTheme1("pink")}
                  />
                   <div className=
                  "m-0 ml-2 p-0  h-5 w-24 bg-pink-400">
                  </div>
                  </div>
                  <br />
                  <div className="flex m-1 ">
                  <input
                    type="radio"
                    name="theme1"
                    onClick={() => setTheme1("yellow")}
                  />
                  
                  <div className=
                  "m-0 ml-2 p-0  h-5 w-24 bg-yellow-400">
                  </div>
                  </div>
                  <br />
                  <div className="flex m-1">
                  <input
                    type="radio"
                    name="theme1"
                    onClick={() => setTheme1("orange")}
                  />
                  <div className=
                  "m-0 ml-2 p-0  h-5 w-24 bg-orange-400">
                  </div>
                  </div>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center rounded  h-52 ">
                Choose color for Theme gradient :
                <p className="mt-2">
                <div className="flex m-1">
                  <input
                    type="radio"
                    name="theme2"
                    onClick={() => setTheme2("pink")}
                  />
                  <div className=
                  "m-0 ml-2 p-0  h-5 w-24 bg-pink-400">
                  </div>
                  </div>
                  <br />
                  <div className="flex m-1">
                  <input
                    type="radio"
                    name="theme2"
                    onClick={() => setTheme2("yellow")}
                  />
                   <div className=
                  "m-0 ml-2 p-0  h-5 w-24 bg-yellow-400">
                  </div>
                  </div>
                  <br />
                  <div className="flex m-1">
                  <input
                    type="radio"
                    name="theme2"
                    onClick={() => setTheme2("orange")}
                  />
                  <div className=
                  "m-0 ml-2 p-0  h-5 w-24 bg-orange-400">
                  </div>
                  </div>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center rounded  h-52 ">
                Choose color for Theme gradient :
                <p className="mt-2">
                <div className="flex m-1">
                  <input
                    type="radio"
                    name="theme3"
                    onClick={() => setTheme3("pink")}
                  />
                 <div className=
                  "m-0 ml-2 p-0  h-5 w-24 bg-pink-400">
                  </div>
                  </div>
                  <br />
                  <div className="flex m-1">
                  <input
                    type="radio"
                    name="theme3"
                    onClick={() => setTheme3("yellow")}
                  />
                  <div className=
                  "m-0 ml-2 p-0  h-5 w-24 bg-yellow-400">
                  </div>
                  </div>
                  <br />
                  <div className="flex m-1">
                  <input
                    type="radio"
                    name="theme3"
                    onClick={() => setTheme3("orange")}
                  />
                  <div className=
                  "m-0 ml-2 p-0  h-5 w-24 bg-orange-400">
                  </div>
                  </div>
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <button
                className="block rounded-lg bg-indigo-400 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                onClick={() => showcolors()}
              >
                Apply Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Preference;

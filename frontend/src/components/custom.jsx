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
      <div class="ml-300px mx-auto max-w-screen-x3 px-4 py-16 sm:px-6 lg:px-8 justify-center">
        <div class="mx-auto max-w-2xl">
          <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Start Customizing
          </h1>

          <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
            Fill the form to set your preference. Which will be reflected in
            your dashboard.
          </p>

          <form
            action=""
            class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p class="text-center text-lg font-medium">Let's Change it!</p>

            <label for="email" class="sr-only">
              {" "}
              Choose color for text :
            </label>

            <div className="grid grid-cols-2 gap-4 mb-4 ">
              <div className="flex items-center flex-col justify-center rounded  h-28  ">
                Choose color for text :
                <p className="">
                  <input
                    type="radio"
                    name="text"
                    onClick={() => setText("red")}
                  />
                  RED
                  <br />
                  <input
                    type="radio"
                    name="text"
                    onClick={() => setText("green")}
                  />
                  GREEN
                  <br />
                  <input
                    type="radio"
                    name="text"
                    onClick={() => setText("blue")}
                  />
                  BLUE
                </p>
              </div>
              <div className="flex flex-col items-center justify-center rounded  h-28 ">
                Choose color for background :
                <p className="">
                  <input
                    type="radio"
                    name="background"
                    onClick={() => setBack("pink")}
                  />
                  PINK
                  <br />
                  <input
                    type="radio"
                    name="background"
                    onClick={() => setBack("yellow")}
                  />
                  YELLOW
                  <br />
                  <input
                    type="radio"
                    name="background"
                    onClick={() => setBack("orange")}
                  />
                  ORANGE
                </p>
              </div>
              <div className="flex flex-col items-center justify-center rounded  h-28 ">
                Choose color for Header :
                <p className="">
                  <input
                    type="radio"
                    name="header"
                    onClick={() => setHeadbg("pink")}
                  />
                  PINK
                  <br />
                  <input
                    type="radio"
                    name="header"
                    onClick={() => setHeadbg("yellow")}
                  />
                  YELLOW
                  <br />
                  <input
                    type="radio"
                    name="header"
                    onClick={() => setHeadbg("orange")}
                  />
                  ORANGE
                </p>
              </div>
              <div className="flex flex-col items-center justify-center rounded  h-28 ">
                Choose color for Footer :
                <p className="">
                  <input
                    type="radio"
                    name="footer"
                    onClick={() => setFootbg("pink")}
                  />
                  PINK
                  <br />
                  <input
                    type="radio"
                    name="footer"
                    onClick={() => setFootbg("yellow")}
                  />
                  YELLOW
                  <br />
                  <input
                    type="radio"
                    name="footer"
                    onClick={() => setFootbg("orange")}
                  />
                  ORANGE
                </p>
              </div>
              <div className="flex flex-col items-center justify-center rounded  h-28 ">
                Choose color for Radio Button :
                <p className="">
                  <input
                    type="radio"
                    name="radio"
                    onClick={() => setRadio("pink")}
                  />
                  PINK
                  <br />
                  <input
                    type="radio"
                    name="radio"
                    onClick={() => setRadio("yellow")}
                  />
                  YELLOW
                  <br />
                  <input
                    type="radio"
                    name="radio"
                    onClick={() => setRadio("orange")}
                  />
                  ORANGE
                </p>
              </div>
              <div className="flex flex-col items-center justify-center rounded  h-28 ">
                Choose color for Dropdownbutton:
                <p className="">
                  <input
                    type="radio"
                    name="drop"
                    onClick={() => setDrop("pink")}
                  />
                  PINK
                  <br />
                  <input
                    type="radio"
                    name="drop"
                    onClick={() => setDrop("yellow")}
                  />
                  YELLOW
                  <br />
                  <input
                    type="radio"
                    name="drop"
                    onClick={() => setDrop("orange")}
                  />
                  ORANGE
                </p>
              </div>
              <div className="flex flex-col items-center justify-center rounded  h-28 ">
                Choose color for Theme gradient :
                <p className="">
                <div className="flex ">
                  <input
                    type="radio"
                    name="theme1"
                    onClick={() => setTheme1("pink")}
                  />
                   <div className=
                  "m-0 ml-2 p-0  h-5 w-14 bg-pink-400">
                  </div>
                  </div>
                  <br />
                  <input
                    type="radio"
                    name="theme1"
                    onClick={() => setTheme1("yellow")}
                  />
                  YELLOW
                  <div className=
                  "flex flex-row h-2  bg-yellow-300">
                  </div>
                  <br />
                  <input
                    type="radio"
                    name="theme1"
                    onClick={() => setTheme1("orange")}
                  />
                  ORANGE
                </p>
              </div>
              <div className="flex flex-col items-center justify-center rounded  h-28 ">
                Choose color for Theme gradient :
                <p className="">
                  <input
                    type="radio"
                    name="theme2"
                    onClick={() => setTheme2("pink")}
                  />
                  PINK
                  <br />
                  <input
                    type="radio"
                    name="theme2"
                    onClick={() => setTheme2("yellow")}
                  />
                  YELLOW
                  <br />
                  <input
                    type="radio"
                    name="theme2"
                    onClick={() => setTheme2("orange")}
                  />
                  ORANGE
                </p>
              </div>
              <div className="flex flex-col items-center justify-center rounded  h-28 ">
                Choose color for Theme gradient :
                <p className="">
                  <input
                    type="radio"
                    name="theme3"
                    onClick={() => setTheme3("pink")}
                  />
                  PINK
                  <br />
                  <input
                    type="radio"
                    name="theme3"
                    onClick={() => setTheme3("yellow")}
                  />
                  YELLOW
                  <br />
                  <input
                    type="radio"
                    name="theme3"
                    onClick={() => setTheme3("orange")}
                  />
                  ORANGE
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <button
                className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
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

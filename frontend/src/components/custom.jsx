import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "./loading";

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
  const [iconColor,setIconColor] = useState("")
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    axios.get(`http://localhost:5000/user/${id}`)
    .then((res)=>{
        setText(res.data.textColor)
        setBack(res.data.buttonBackgroundColor)
        setHeadbg(res.data.headerBackgroundColor)
        setFootbg(res.data.footerBackgroundColor)
        setDrop(res.data.dropDownButtonColor)
        setRadio(res.data.radioButtonColor)
        setTheme1(res.data.themeColor1)
        setTheme2(res.data.themeColor2)
        setTheme3(res.data.themeColor3)
        setIconColor(res.data.iconColor)
        setLoading(false)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

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
        iconColor: iconColor,
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
      {loading && <Loading/>}
      {!loading && <div className="ml-300px mx-auto max-w-screen-x3 px-4 py-16   sm:px-6 lg:pl-72 justify-center">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-center text-2xl font-bold font-one text-black sm:text-3xl">
          Start Customizing
        </h1>

        <p className="mx-auto mt-4 max-w-md font-two text-center text-black">
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
            <div className="flex items-center flex-col justify-center  h-52  ">
              Choose color for text :
              <p className="mt-2">
              <input type="color"  value={text} onChange={(e)=>(setText(e.target.value))} />
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded  h-52 ">
              Choose background color :
              <p className="mt-2">
              <input type="color" value={back} onChange={(e)=>(setBack(e.target.value))}/>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded  h-52 ">
              Choose color for Header :
              <p className="mt-2">
              <input type="color" value={headbg} onChange={(e)=>(setHeadbg(e.target.value))}/>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded  h-52 ">
              Choose color for Footer :
              <p className="mt-2">
              <input type="color" value={footbg} onChange={(e)=>(setFootbg(e.target.value))}/>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded  h-52 ">
              Choose color for Radio Button :
              <p className="mt-2">
              <input type="color" value={radio} onChange={(e)=>(setRadio(e.target.value))}/>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded  h-52 ">
              Choose color for Dropdownbutton:
              <p className="mt-2">
              <input type="color" value={drop} onChange={(e)=>(setDrop(e.target.value))}/>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded  h-52 ">
              Choose color for Theme gradient :
              <p className="mt-2">
              <input type="color" value={theme1} onChange={(e)=>(setTheme1(e.target.value))}/>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded  h-52 ">
              Choose color for Theme gradient :
              <p className="mt-2">
              <input type="color" value={theme2} onChange={(e)=>(setTheme2(e.target.value))}/>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded  h-52 ">
              Choose color for Theme gradient :
              <p className="mt-2">
              <input type="color" value={theme3} onChange={(e)=>(setTheme3(e.target.value))}/>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded  h-52 ">
              Choose color for Icons :
              <p className="mt-2">
              <input type="color" value={iconColor} onChange={(e)=>(setIconColor(e.target.value))}/>
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
    </div>}
    </>
  );
};

export default Preference;

import React, { useState } from 'react';
import { useUser } from '../pages/demoAccount.jsx';

const Preference = () => {
  const { user } = useUser();
  const [btn, setBtn] = useState("");
  const id=user.id;
  const Preference = () => {
   
    axios
      .post("http://localhost:5000/changes", {
        user:user,
        btn: btn,
        
      })
      .then((res) => {
        console.log(res.status);
        console.log(res.data);
        if (res.status === 200) {
          const userData = res.data;
          login(userData);
          navigate("../dash");
        } else {
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log("Error in Login -> ", err);
      });
  };





  return (
    <div classNameName="w-full max-w-md mx-auto">
      <form classNameName="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
        <div classNameName="mb-4">
          <label classNameName="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
           {user.username}
          </label>
         
        </div>
        <div classNameName="mb-4">
          <label classNameName="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Choose the colour of the Text:
          </label>
          <fieldset className="flex flex-wrap gap-3">
          <legend className="sr-only">Color</legend>

  <div>
    <input
      onChange={(e) => setBtn(e.target.value)}
      type="radio"
      name="ColorOption"
      value="ColorBlack"
      id="ColorBlack"
      className="peer hidden"
      checked
    />

    <label
      for="ColorBlack"
      className="block h-8 w-8 cursor-pointer rounded-full bg-black shadow-sm peer-checked:ring-2 peer-checked:ring-black peer-checked:ring-offset-2"
    >
      <span className="sr-only"> Texas Tea </span>
    </label>
  </div>

  <div>
    <input
    onChange={(e) => setBtn(e.target.value)}
      type="radio"
      name="ColorOption"
      value="ColorRed"
      id="ColorRed"
      className="peer hidden"
    />

    <label
      for="ColorRed"
      className="block h-8 w-8 cursor-pointer rounded-full bg-red-500 shadow-sm peer-checked:ring-2 peer-checked:ring-red-500 peer-checked:ring-offset-2"
    >
      <span className="sr-only">Fiesta Red</span>
    </label>
  </div>

  <div>
    <input
    onChange={(e) => setBtn(e.target.value)}
      type="radio"
      name="ColorOption"
      value="ColorBlue"
      id="ColorBlue"
      className="peer hidden"
    />

    <label
      for="ColorBlue"
      className="block h-8 w-8 cursor-pointer rounded-full bg-blue-500 shadow-sm peer-checked:ring-2 peer-checked:ring-blue-500 peer-checked:ring-offset-2"
    >
      <span className="sr-only">Cobalt Blue</span>
    </label>
  </div>

  <div>
    <input
    onChange={(e) => setBtn(e.target.value)}
      type="radio"
      name="ColorOption"
      value="ColorGold"
      id="ColorGold"
      className="peer hidden"
    />

    <label
      for="ColorGold"
      className="block h-8 w-8 cursor-pointer rounded-full bg-amber-500 shadow-sm peer-checked:ring-2 peer-checked:ring-amber-500 peer-checked:ring-offset-2"
    >
      <span className="sr-only">Goldtop</span>
    </label>
  </div>
</fieldset>
        </div>


 





        <div classNameName="flex items-center justify-between">
          <button
          onClick={Preference} 
            classNameName="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Preference;

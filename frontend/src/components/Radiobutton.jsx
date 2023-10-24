const Radiobutton = (props) => {
  return (
    <div>
  <label for="HeadlineAct" class="block text-sm font-medium text-gray-900">
    {props.name}
  </label>

  <select
    name="HeadlineAct"
    id="HeadlineAct"
    class={`mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm ${props.radio}`}
  >
    <option value="">Please select</option>
    <option value="JM">John Mayer</option>
    <option value="SRV">Stevie Ray Vaughn</option>
    <option value="JH">Jimi Hendrix</option>
    <option value="BBK">B.B King</option>
    <option value="AK">Albert King</option>
    <option value="BG">Buddy Guy</option>
    <option value="EC">Eric Clapton</option>
  </select>
</div>
  );
};

export default Radiobutton;

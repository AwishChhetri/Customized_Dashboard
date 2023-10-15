const Radiobutton = (props) => {
  return (
    <div>
      <div className="form-control p-2 sm:text-xs s">
        <label className="label cursor-pointer">
          <span className="label-text">{props.name}</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-violet-500 "
            checked
          />
        </label>
      </div>
    </div>
  );
};

export default Radiobutton;

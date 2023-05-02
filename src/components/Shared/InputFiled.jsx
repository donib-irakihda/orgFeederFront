import React from "react";

const InputField = ({
  placeholder,
  id,
  name,
  type,
  onChange,
  value,
  required,
}) => {
  return (
    <div className="flex flex-col mb-2 ">
      <label
        htmlFor={name}
        className="text-lg text-slate-600 font-semibold mb-1 ml-2"
      >
        {name}
      </label>
      <input
        type={type}
        className=" w-90 border ring-1 focus:ring-red-500 hover:border-success2 focus:ring-1 rounded-md px-1 py-2"
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        min="1000"
      />
    </div>
  );
};

export default InputField;

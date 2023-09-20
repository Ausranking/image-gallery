import React from "react";

const Button = ({ text, onClick,id}) => {
  return (
    <button
      className="w-80 p-2 rounded-md text-white font-bold mt-2 bg-emerald-500 hover:bg-emerald-400"
      onClick={onClick}
      id={id}
    >
      {text}
    </button>
  );
};

export default Button;

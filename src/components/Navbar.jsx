import React from "react";
import { cam, jojo } from "../images";
import Button from "./Button";

const Navbar = ({ handleLogout }) => {
  return (
    <nav className="flex justify-between w-11/12 m-auto border-b border-emerald-30 border-dashed">
      <div>
        <img src={cam} alt="" />
      </div>
      <div className="hover:opacity-30">
        <img src={jojo} alt="" />
      </div>
      <div>
        <Button text="Logout" onClick={handleLogout} id='logout-btn' />
      </div>
    </nav>
  );
};

export default Navbar;

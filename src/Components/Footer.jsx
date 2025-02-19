import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white  bottom-0 w-full">
      <div className="flex justify-evenly items-center">
        <img src="logo2.png" alt="Logo" />
        <span>ELEVATORS</span>
        <span>ESCALATORS</span>
        <span>MOVING WALKS</span>
        <span>SERVICES</span>
        <span>MODERNIZATION</span>
      </div>
      <div className="bg-gradient-to-r from-purpleCustom to-orangeCustom pt-1 pb-1">
        <p className="text-center text-white pb-1">
          TK ELEVATOR, ITS DELHI @ 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;

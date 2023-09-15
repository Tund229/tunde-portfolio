import React from "react";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/Tund229" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2  transition-all duration-300">
            <AiOutlineGithub />
          </span>
        </a>
        <a href="https://web.facebook.com/tundevofficiel" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2  transition-all duration-300">
            <BsFacebook />
          </span>
        </a>
        <a href="https://instagram.com/tunde_gnn" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2  transition-all duration-300">
            <BsInstagram />
          </span>
        </a>

        <a href="https://wa.me/22990923027" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2  transition-all duration-300">
            <BsWhatsapp />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/tund%C3%A9-gounon-9b19b4228/"
          target="_blank"
        >
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2  transition-all duration-300">
            <AiFillLinkedin />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
};

export default LeftSide;

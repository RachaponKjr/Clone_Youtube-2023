import React from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiTwotoneAudio,
  AiOutlineVideoCameraAdd,
} from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import IconYoutube from "../../imgs/logo.png";
import "./Navber.css"

const Navber = () => {
  return (
    <div className="main-navber">
      <div className="left-navber">
        <AiOutlineMenu />
        <img src={IconYoutube} width={100} />
      </div>
      <div className="center-navber">
        <div className="search-input">
          <input placeholder="ค้นหา"></input>
          <AiOutlineSearch className="icon-search"/>
        </div>
        <AiTwotoneAudio className="icon-audio" />
      </div>
      <div className="right-navber">
        <AiOutlineVideoCameraAdd />
        <BsBell />
        <div className="avata"></div>
      </div>
    </div>
  );
};

export default Navber;

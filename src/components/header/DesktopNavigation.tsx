import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiFillYoutube, AiOutlineSearch } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiVideoPlus } from "react-icons/bi";
import { MdKeyboardVoice } from "react-icons/md";
import profileImg from "../../assets/test.png";

const DesktopNavigation: React.FC = () => {
  return (
    <header className="desktop">
      <nav className="desktop__nav">
        <div className="desktop__left">
          <div className="desktop__box">
            <AiOutlineMenu />
          </div>
          <div className="logo">
            <Link to="/">
              <AiFillYoutube />
              YouTube
            </Link>
          </div>
        </div>

        <div className="search">
          <div className="search__bar">
            <input type="text" placeholder="Search" />
            <div className="search__icon">
              <AiOutlineSearch />
            </div>
          </div>
          <div className="icon__box">
            <MdKeyboardVoice className="search-voice" />
          </div>
        </div>

        <div className="right__box">
          <div className="icon__box">
            <BiVideoPlus />
          </div>{" "}
          <div className="icon__box">
            <IoMdNotificationsOutline />
          </div>
          <img src={profileImg} alt="profile-pics" />
        </div>
      </nav>
    </header>
  );
};
export default DesktopNavigation;

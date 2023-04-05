import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { AiFillYoutube, AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiVideoPlus, BiArrowBack } from "react-icons/bi";
import profileImg from "../../assets/test.png";
import { MdKeyboardVoice } from "react-icons/md";
import { Link } from "react-router-dom";
import MobileSideBar from "./MobileSideBar";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);

  return (
    <header className="mobile">
      {!showSearchBar ? (
        <nav className="mobile__nav">
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className="mobile__left"
          >
            <div className="mobile__left--icon">
              {!isOpen ? <AiOutlineMenu /> : <IoMdClose />}
            </div>
            <div className="logo">
              <Link to="/">
                <AiFillYoutube />
                YouTube
              </Link>
            </div>
          </div>
          <div className="mobile__right">
            <div
              className="mobile__left--icon"
              onClick={() => setShowSearchBar(true)}
            >
              <AiOutlineSearch />
            </div>
            <div className="mobile__left--icon">
              <MdKeyboardVoice />
            </div>
            <div className="mobile__left--icon">
              <BiVideoPlus />
            </div>
            <div className="mobile__left--icon">
              <IoMdNotificationsOutline />
            </div>
            <img src={profileImg} alt="profile-pics" className="img" />
          </div>
        </nav>
      ) : (
        <nav className="mobile__nav">
          <div
            className="mobile__left--icon"
            onClick={() => setShowSearchBar(false)}
          >
            <BiArrowBack />
          </div>

          <div className="mobile__search">
            <div className="mobile__search--bar">
              <input type="text" placeholder="Search" />
              <div className="mobile__search__icon">
                <AiOutlineSearch />
              </div>
            </div>
            <div className="mobile__search--box">
              <MdKeyboardVoice className="mobile__search--voice" />
            </div>
          </div>
        </nav>
      )}
      {isOpen && (
        <div className="mobile__sidebar">
          <MobileSideBar />
        </div>
      )}
    </header>
  );
};
export default MobileNavigation;

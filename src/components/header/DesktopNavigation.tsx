import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiFillYoutube, AiOutlineSearch } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiVideoPlus } from "react-icons/bi";
import { MdKeyboardVoice } from "react-icons/md";
import profileImg from "../../assets/test.png";

import axios from "axios";
import { API_KEY, BASE_URL, formatVideoList } from "../../utlis/Formatter";
import { videosActions, VideoState } from "../../redux/videos/videosSlice";
import { useDispatch } from "react-redux";
interface GetUsersResponse {
  nextPageToken: string;
  items: any[];
}
const DesktopNavigation: React.FC = () => {
  const dispatch = useDispatch();
  const searchRef = useRef<HTMLInputElement>(null);
  const searchHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const searchTerm = searchRef?.current?.value;
    console.log(searchTerm);
    try {
      const { data } = await axios.get<GetUsersResponse>(
        `${BASE_URL}/part=snippet&maxResults=12&q=${searchTerm}&type=video&key=${API_KEY}`
      );
      // Storing the next page token to implement infinite scrolling
      dispatch(videosActions.updateNextPageToken(data.nextPageToken));

      // formatting the fetched resources
      const formattedVideos: VideoState[] = formatVideoList(data.items);

      // Storing the already formatted fetched videos
      dispatch(videosActions.searchedVideos(formattedVideos));
    } catch ({ message }) {
      dispatch(
        videosActions.triggerError({ message: message, hasError: true })
      );
    }
  };
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
            <form onSubmit={searchHandler}>
              <input type="text" placeholder="Search" ref={searchRef} />
            </form>
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

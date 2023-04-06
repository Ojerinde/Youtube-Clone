import { useState, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { AiFillYoutube, AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiVideoPlus, BiArrowBack } from "react-icons/bi";
import profileImg from "../../assets/test.png";
import { MdKeyboardVoice } from "react-icons/md";
import { Link } from "react-router-dom";
import MobileSideBar from "./MobileSideBar";
import { useDispatch } from "react-redux";
import { videosActions, VideoState } from "../../redux/videos/videosSlice";
import axios from "axios";
import { API_KEY, BASE_URL, formatVideoList } from "../../utlis/Formatter";

interface GetUsersResponse {
  nextPageToken: string;
  items: any[];
}

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  const dispatch = useDispatch();
  const searchRef = useRef<HTMLInputElement>(null);
  const searchHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const searchTerm = searchRef?.current?.value;
    dispatch(videosActions.setIsLoading(true));
    try {
      const { data } = await axios.get<GetUsersResponse>(
        `${BASE_URL}search?part=snippet&maxResults=12&q=${searchTerm}&type=video&key=${API_KEY}`
      );
      // Storing the next page token to implement infinite scrolling
      dispatch(videosActions.updateNextPageToken(data.nextPageToken));

      // formatting the fetched resources
      const formattedVideos: VideoState[] = formatVideoList(data.items);

      // Storing the already formatted fetched videos
      dispatch(videosActions.addVideos(formattedVideos));
    } catch ({ message }) {
      dispatch(
        videosActions.triggerError({ message: message, hasError: true })
      );
    } finally {
      dispatch(videosActions.setIsLoading(false));
    }
  };
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
              <form onSubmit={searchHandler}>
                <input type="text" placeholder="Search" ref={searchRef} />
              </form>
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
          <MobileSideBar onSelect={() => setIsOpen(false)} />
        </div>
      )}
    </header>
  );
};
export default MobileNavigation;

import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../footer/footer";
import {
  MdOutlineSubscriptions,
  MdHomeFilled,
  MdOutlinePlayArrow,
} from "react-icons/md";
import {
  Library,
  MoreFromYoutube,
  Settings,
  SubscriptionsData,
} from "../sidebar/sidebarBanks";
import SideBarItem from "../sidebar/sideBarItem";

interface Props {
  onSelect: () => void;
}
const MobileSideBar: React.FC<Props> = ({ onSelect }) => {
  return (
    <div className="mobile__sidebar">
      <div className="sidebar__list">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "sidebar__active" : "")}
          onClick={onSelect}
        >
          <MdHomeFilled /> Home
        </NavLink>
        <NavLink
          to="/trending"
          className={({ isActive }) => (isActive ? "sidebar__active" : "")}
          onClick={onSelect}
        >
          <MdOutlinePlayArrow /> Trending
        </NavLink>
        <NavLink
          to="/subscription"
          className={({ isActive }) => (isActive ? "sidebar__active" : "")}
          onClick={onSelect}
        >
          <MdOutlineSubscriptions />
          Subscriptions
        </NavLink>
      </div>
      <div className="sidebar__list">
        {Library.map((more, index) => (
          <NavLink to={more.link} key={index} onClick={onSelect}>
            {more.icon}
            {more.title}
          </NavLink>
        ))}
      </div>

      <div>
        <div className="header-text">Subscriptions</div>
        <ul className="sidebar__list">
          {SubscriptionsData.map((subs, index) => (
            <SideBarItem
              src={subs.src}
              title={subs.title}
              link={subs.link}
              key={index}
            />
          ))}
        </ul>
      </div>

      <div className="sidebar__list">
        <div className="header-text">More from YouTube</div>
        {MoreFromYoutube.map((more, index) => (
          <NavLink to={more.link} className="color__red" key={index}>
            {more.icon}
            {more.title}
          </NavLink>
        ))}
      </div>

      <div className="sidebar__list">
        {Settings.map((more, index) => (
          <NavLink to={more.link} key={index}>
            {more.icon}
            {more.title}
          </NavLink>
        ))}
      </div>
      <Footer />
    </div>
  );
};
export default MobileSideBar;

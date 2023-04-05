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
} from "./sidebarBanks";
import SideBarItem from "./sideBarItem";
const SideBar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="desktop">
        <div className="sidebar__list">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "sidebar__active" : "")}
          >
            <MdHomeFilled /> Home
          </NavLink>
          <NavLink
            to="/trending"
            className={({ isActive }) => (isActive ? "sidebar__active" : "")}
          >
            <MdOutlinePlayArrow /> Trending
          </NavLink>
          <NavLink
            to="/subscription"
            className={({ isActive }) => (isActive ? "sidebar__active" : "")}
          >
            <MdOutlineSubscriptions />
            Subscriptions
          </NavLink>
        </div>
        <div className="sidebar__list">
          {Library.map((more, index) => (
            <NavLink to={more.link} key={index}>
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
    </div>
  );
};
export default SideBar;

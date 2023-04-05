import React from "react";
import testImage from "../../assets/test.png";
import { Link } from "react-router-dom";
import { Subscriptions } from "./sidebarBanks";
const SideBarItem: React.FC<Subscriptions> = ({ src, link, title }) => {
  return (
    <li className="sidebar__item">
      <Link to={link}>
        <img src={testImage} alt="user1" /> {title}
      </Link>
    </li>
  );
};
export default SideBarItem;

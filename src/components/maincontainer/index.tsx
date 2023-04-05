import React from "react";
import { NavLink } from "react-router-dom";
import VideoItem from "./videoItem";
import { VideosBank } from "./videosBanks";

const RecommendationsArr = [
  {
    to: "/",
    title: "All",
  },
  {
    to: "/games",
    title: "Games",
  },
  {
    to: "/react",
    title: "Recat",
  },
  {
    to: "/designs",
    title: "Designs",
  },
  {
    to: "/a",
    title: "DesignsI",
  },
  {
    to: "/b",
    title: "DesignsH",
  },
  {
    to: "/c",
    title: "DesignsG",
  },
  {
    to: "/d",
    title: "DesignsF",
  },
  {
    to: "/e",
    title: "TrailersE",
  },
  {
    to: "/f",
    title: "TrailersD",
  },
  {
    to: "/g",
    title: "TrailersC",
  },
  {
    to: "/h",
    title: "TrailersB",
  },
  {
    to: "/i",
    title: "TrailersA",
  },
];
const MainContainer: React.FC = () => {
  return (
    <div className="container">
      <ul className="container__list">
        {RecommendationsArr.map((rec, index) => (
          <NavLink
            key={index}
            to={rec.to}
            className={({ isActive }) =>
              isActive ? "container__list__active" : ""
            }
          >
            {rec.title}
          </NavLink>
        ))}
      </ul>
      <div className="container__videos">
        {VideosBank.map((vids) => (
          <VideoItem
            key={vids.id}
            id={vids.id}
            title={vids.title}
            name={vids.name}
            icon={vids.icon}
            views={vids.views}
            posted={vids.posted}
            liveUrl={vids.liveUrl}
          />
        ))}
      </div>
      {/* <div className="container__videos">
        {VideosBank.map((vids) => (
          <VideoItem
            key={vids.id}
            id={vids.id}
            title={vids.title}
            name={vids.name}
            icon={vids.icon}
            views={vids.views}
            posted={vids.posted}
            liveUrl={vids.liveUrl}
          />
        ))}
      </div> */}
    </div>
  );
};
export default MainContainer;

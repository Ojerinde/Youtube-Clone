import React from "react";
import testImg from "../../assets/test.png";
import { VideosObj } from "./videosBanks";
const VideoItem: React.FC<VideosObj> = ({
  title,
  name,
  liveUrl,
  icon,
  posted,
  views,
}) => {
  return (
    <div className="container__videos--item">
      <div className="container__videos--box">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/PRsMrmzA8ng"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="container__videos--details">
        <figure>
          <img src={testImg} alt="Joel" />
        </figure>
        <div className="container__videos--detailsbox">
          <h2>{title}</h2>
          <p>
            {name} {icon}
          </p>
          <p>
            {views} .{posted}
          </p>
        </div>
      </div>
    </div>
  );
};
export default VideoItem;

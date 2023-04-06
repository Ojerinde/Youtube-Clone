import React from "react";
import { VideoState } from "../../../redux/videos/videosSlice";
const VideoItem: React.FC<VideoState> = ({
  title,
  publishedAt,
  videoId,
  channelId,
  channelTitle,
  description,
  imgUrl,
}) => {
  return (
    <div className="container__videos--item">
      <div className="container__videos--box">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="container__videos--details">
        <figure>
          <img src={`${imgUrl}`} alt="Joel" />
        </figure>
        <div className="container__videos--detailsbox">
          <h2>{title}</h2>
          <p>{channelTitle}</p>
          <p>12mil .{publishedAt}</p>
        </div>
      </div>
    </div>
  );
};
export default VideoItem;

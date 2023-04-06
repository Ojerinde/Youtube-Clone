import React from "react";
import { BsDot } from "react-icons/bs";
import { VideoState } from "../../../redux/videos/videosSlice";
import testImg from "../../../assets/test.png";
const VideoItem: React.FC<VideoState> = ({
  title,
  publishedAt,
  videoId,
  channelId,
  channelTitle,
  description,
  imgUrl,
}) => {
  // const navigate = useNavigate();
  // const { pathname } = useLocation();
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
          <img src={testImg} alt="Joel" />
        </figure>
        <div className="container__videos--detailsbox">
          <h2>{title}</h2>
          <p>{channelTitle}</p>
          <p>
            10 million views <BsDot /> <span>{publishedAt}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default VideoItem;

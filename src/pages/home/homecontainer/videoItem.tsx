import React, { useEffect } from "react";
import { BsDot } from "react-icons/bs";
import {
  StaState,
  videosActions,
  videosSelector,
  VideoState,
} from "../../../redux/videos/videosSlice";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const VideoItem: React.FC<VideoState> = ({
  title,
  publishedAt,
  videoId,
  channelId,
  channelTitle,
  description,
  imgUrl,
}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const navigateHandler = () => {
    navigate(`${pathname}/${videoId}`);
  };
  const { statistics } = useSelector(videosSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `${BASE_URL}videos?part=snippet%2Cstatistics&id=${videoId}&key=${API_KEY}`
      );
      const video = data.items[0].id;
      const views = data.items[0].statistics.viewCount;
      const comments = data.items[0].statistics.commentCount;
      // console.log(video, views, comments);
      const payload: StaState[] = [{ views, comments, videoId: video }];
      dispatch(videosActions.addStatictics(payload));
    })();
  }, [dispatch, videoId]);

  const video = statistics.find((vid) => vid.videoId === videoId);

  return (
    <div className="container__videos--item" onClick={navigateHandler}>
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
          <img src={imgUrl} alt="Joel" />
        </figure>
        <div className="container__videos--detailsbox">
          <h2>{title}</h2>
          <p>{channelTitle}</p>
          <p>
            {video?.views} views <BsDot /> <span>{publishedAt}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default VideoItem;

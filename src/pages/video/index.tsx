import React, { useEffect } from "react";
import { BsDot } from "react-icons/bs";
import {
  videosActions,
  videosSelector,
  VideoState,
} from "../../redux/videos/videosSlice";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import { formatVideoList } from "../../utlis/Formatter";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import InfiniteScroll from "react-infinite-scroll-component";

interface GetUsersResponse {
  items: any[];
  nextPageToken: string;
}

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const VideoDetails: React.FC = () => {
  const { videos, statistics, nextPageToken, relatedVideos } =
    useSelector(videosSelector);
  const params = useParams();
  const video = videos.find((vid) => vid.videoId === params.videoId);
  const sta = statistics.find((vid) => vid.videoId === params.videoId);

  // Fetching related videos
  const dispatch = useDispatch();
  useEffect(() => {
    const getAllVideos = async () => {
      dispatch(videosActions.setIsLoading(true));
      dispatch(
        videosActions.triggerError({ message: "message", hasError: false })
      );
      try {
        const { data } = await axios.get<GetUsersResponse>(
          `${BASE_URL}search?part=snippet&maxResults=5&relatedToVideoId=&${params.videoId}&type=video&key=${API_KEY}`
        );
        // Storing the next page token to implement infinite scrolling
        dispatch(videosActions.updateNextPageToken(data.nextPageToken));
        // formatting the fetched resources
        const formattedVideos: VideoState[] = formatVideoList(data.items);

        // Storing the already formatted fetched videos
        dispatch(videosActions.addRelatedVideos(formattedVideos));
      } catch ({ message }) {
        dispatch(
          videosActions.triggerError({ message: message, hasError: true })
        );
      } finally {
        dispatch(videosActions.setIsLoading(false));
      }
    };
    getAllVideos();
  }, [dispatch, params.videoId]);

  const fetchMoreVideos = async () => {
    try {
      const { data } = await axios.get<GetUsersResponse>(
        `${BASE_URL}search?part=snippet&maxResults=5&q=&type=video&pageToken=${nextPageToken}&key=${API_KEY}`
      );
      console.log(data);
      // formatting the fetched resources
      const formattedVideos: VideoState[] = formatVideoList(data.items);
      dispatch(videosActions.updateRelatedVideos(formattedVideos));
    } catch (error) {
      dispatch(videosActions.triggerError({ message: error, hasError: true }));
    }
  };

  return (
    <section className="nexted">
      <div className="nexted__left">
        <div className="nexted__left--box">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video?.videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="nexted__left--details">
          <figure>
            <img src={video?.imgUrl} alt="Joel" />
          </figure>
          <div className="nexted__left--detailsbox">
            <h2>{video?.title}</h2>
            <p>{video?.channelTitle}</p>
            <p>
              {sta?.views} views <BsDot /> <span>{video?.publishedAt}</span>
            </p>
          </div>
        </div>
      </div>
      <div
        className="nexted__right"
        id="scrollableDiv"
        style={{ height: "100%", overflow: "auto" }}
      >
        <InfiniteScroll
          dataLength={relatedVideos.length}
          next={fetchMoreVideos}
          hasMore={true}
          loader={<LoadingSpinner />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>No more video to load</b>
            </p>
          }
          scrollableTarget="scrollableDiv"
          scrollThreshold="50px"
        >
          {relatedVideos?.map((vid) => (
            <div className="nexted__right--box" key={vid.videoId}>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${vid?.videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </section>
  );
};
export default VideoDetails;

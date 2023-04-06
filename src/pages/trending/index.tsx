import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import {
  videosActions,
  videosSelector,
  VideoState,
} from "../../redux/videos/videosSlice";
import {
  API_KEY,
  BASE_URL,
  formatVideoList,
  RecommendationsArr,
} from "../../utlis/Formatter";
import { useSelector } from "react-redux";
import VideoItem from "../home/homecontainer/videoItem";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

// const { data } = await axios.get(
//   `${BASE_URL}videos?part=statistics&id=${vid.id.videoId}&key=${API_KEY}`
// // );

interface GetUsersResponse {
  items: any[];
  nextPageToken: string;
}

const Trending: React.FC = () => {
  const dispatch = useDispatch();
  const [tab, setTab] = useState<string>("all");
  const { videos, overlay, isLoading, nextPageToken } =
    useSelector(videosSelector);

  const selectTabHandler = async (dat: string) => {
    dispatch(videosActions.setOverlay(true));
    try {
      const { data } = await axios.get<GetUsersResponse>(
        `${BASE_URL}search?part=snippet&maxResults=12&q=${dat}&type=video&key=${API_KEY}`
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
      if (!isLoading) {
        dispatch(videosActions.setOverlay(false));
      }
    }
    setTab(dat);
  };

  useEffect(() => {
    const getAllVideos = async () => {
      dispatch(videosActions.setIsLoading(true));
      dispatch(
        videosActions.triggerError({ message: "message", hasError: false })
      );
      try {
        const { data } = await axios.get<GetUsersResponse>(
          `${BASE_URL}search?part=snippet&chart=mostPopular&maxResults=12&regionCode=US&q=&type=video&key=${API_KEY}`
        );
        console.log(data);
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
    getAllVideos();
  }, [dispatch]);

  const fetchMoreVideos = async () => {
    try {
      const { data } = await axios.get<GetUsersResponse>(
        `${BASE_URL}search?part=snippet&maxResults=12&q=&type=video&pageToken=${nextPageToken}&key=${API_KEY}`
      );
      // formatting the fetched resources
      const formattedVideos: VideoState[] = formatVideoList(data.items);
      dispatch(videosActions.updateVideos(formattedVideos));
    } catch (error) {
      dispatch(videosActions.triggerError({ message: error, hasError: true }));
    }
  };

  if (overlay) {
    return <div className="loading__overlay">&nbsp;</div>;
  }

  return (
    <div
      className="container"
      id="scrollableDiv"
      style={{ height: "100%", overflow: "auto" }}
    >
      <ul className="container__list">
        {RecommendationsArr.map((rec, index) => (
          <li
            key={index}
            className={`${tab === rec.to ? "container__list__active" : ""}`}
            onClick={selectTabHandler.bind(null, rec.to)}
          >
            {rec.title}
          </li>
        ))}
      </ul>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <InfiniteScroll
          dataLength={videos.length}
          next={fetchMoreVideos}
          hasMore={true}
          loader={<LoadingSpinner />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          scrollableTarget="scrollableDiv"
          scrollThreshold="50px"
        >
          <div className="container__videos">
            {videos?.map((vids, index) => (
              <VideoItem
                key={index}
                videoId={vids.videoId}
                etag={vids.etag}
                title={vids.title}
                imgUrl={vids.imgUrl}
                publishedAt={vids.publishedAt}
                description={vids.description}
                channelTitle={vids.channelTitle}
                channelId={vids.channelId}
              />
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};
export default Trending;

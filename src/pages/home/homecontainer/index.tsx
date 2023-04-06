import axios from "axios";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  videosActions,
  videosSelector,
  VideoState,
} from "../../..//redux/videos/videosSlice";
import { API_KEY, BASE_URL, formatVideoList } from "../../../utlis/Formatter";
import VideoItem from "./videoItem";

const RecommendationsArr = [
  {
    to: "all",
    title: "All",
  },
  {
    to: "games",
    title: "Games",
  },
  {
    to: "react",
    title: "React",
  },
  {
    to: "designs",
    title: "Designs",
  },
  {
    to: "ai",
    title: "AI",
  },
  {
    to: "engineering",
    title: "Engineering",
  },
  {
    to: "sports",
    title: "Sports",
  },
  {
    to: "food",
    title: "Food",
  },
];

interface GetUsersResponse {
  items: any[];
}

const HomeContainer: React.FC = () => {
  const [tab, setTab] = useState<string>("all");
  const { videos, searchedVideos, nextPageToken } = useSelector(videosSelector);
  const dispatch = useDispatch();

  const fetchMoreVideos = async () => {
    try {
      const { data } = await axios.get<GetUsersResponse>(
        `${BASE_URL}/search?part=snippet&maxResults=12&q=&type=video&pageToken=${nextPageToken}&key=${API_KEY}`
      );
      console.log(data);
      // formatting the fetched resources
      const formattedVideos: VideoState[] = formatVideoList(data.items);
      dispatch(videosActions.addVideos(formattedVideos));
    } catch (error) {
      dispatch(videosActions.triggerError({ message: error, hasError: true }));
    }
  };
  const allVideos = searchedVideos.length > 0 ? searchedVideos : videos;
  return (
    <div className="container">
      <ul className="container__list">
        {RecommendationsArr.map((rec, index) => (
          <li
            key={index}
            className={`${tab === rec.to ? "container__list__active" : ""}`}
            onClick={() => setTab(rec.to)}
          >
            {rec.title}
          </li>
        ))}
      </ul>
      <InfiniteScroll
        dataLength={100} //This is important field to render the next data
        next={fetchMoreVideos}
        hasMore={true}
        loader={<h2>Loading...</h2>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="container__videos">
          {allVideos?.map((vids, index) => (
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
    </div>
  );
};
export default HomeContainer;

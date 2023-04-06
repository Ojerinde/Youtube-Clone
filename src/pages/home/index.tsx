import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { videosActions, VideoState } from "../../redux/videos/videosSlice";
import { API_KEY, BASE_URL, formatVideoList } from "../../utlis/Formatter";
import HomeContainer from "./homecontainer";

interface GetUsersResponse {
  items: any[];
  nextPageToken: string;
}

const Home: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getAllVideos = async () => {
      dispatch(videosActions.setIsLoading(true));
      dispatch(
        videosActions.triggerError({ message: "message", hasError: false })
      );
      try {
        const { data } = await axios.get<GetUsersResponse>(
          `${BASE_URL}search?part=snippet&maxResults=12&q=&type=video&key=${API_KEY}`
        );
        console.log(data);
        // Storing the next page token to implement infinite scrolling
        dispatch(videosActions.updateNextPageToken(data.nextPageToken));

        // formatting the fetched resources
        const formattedVideos: VideoState[] = await formatVideoList(data.items);

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

  return <HomeContainer />;
};
export default Home;

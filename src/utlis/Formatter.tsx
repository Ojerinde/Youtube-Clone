import moment from "moment";

export const BASE_URL = "https://www.googleapis.com/youtube/v3/";
export const API_KEY = "AIzaSyD_pzN3QgGrmzrZMs5moyNs0xD-2J02kgI";
export const RecommendationsArr = [
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

export const formatVideoList = (data: any[]) => {
  const formattedVideoList = data.map((vid) => {
    const pub = moment(vid.snippet.publishedAt, "YYYYMMDD").fromNow();

    return {
      etag: vid.etag,
      videoId: vid.id.videoId,
      publishedAt: pub,
      channelId: vid.snippet.channelId,
      title: vid.snippet.title,
      channelTitle: vid.snippet.channelTitle,
      description: vid.snippet.description,
      imgUrl: vid.snippet.thumbnails.default,
    };
  });
  return formattedVideoList;
};

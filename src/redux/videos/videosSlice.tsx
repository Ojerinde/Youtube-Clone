import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../rootReducer";

export interface VideoState {
  videoId: string;
  etag: string;
  publishedAt: string;
  channelId: string;
  title: string;
  channelTitle: string;
  description: string;
  imgUrl: string;
}
export interface AxiosError {
  hasError: boolean | null;
  message: unknown;
}

export interface VideosState {
  videos: VideoState[];
  searchedVideos: VideoState[];
  nextPageToken: string;
  error: AxiosError;
}

const initialState: VideosState = {
  videos: [],
  searchedVideos: [],
  nextPageToken: "",
  error: { hasError: null, message: "" },
};

export const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    addVideos(state, { payload }: PayloadAction<VideoState[]>) {
      state.videos = state.videos.concat(payload);
    },
    searchedVideos(state, { payload }: PayloadAction<VideoState[]>) {
      state.searchedVideos = payload;
    },
    updateNextPageToken(state, { payload }: PayloadAction<string>) {
      state.nextPageToken = payload;
    },
    triggerError(state, { payload }: PayloadAction<AxiosError>) {
      state.error = payload;
    },
  },
});

export const videosActions = videosSlice.actions;
export default videosSlice.reducer;
export const videosSelector = (state: RootState) => state.videos;

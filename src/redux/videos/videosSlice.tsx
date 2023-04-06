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
  nextPageToken: string;
  error: AxiosError;
  isLoading: boolean;
  overlay: boolean;
}

const initialState: VideosState = {
  videos: [],
  nextPageToken: "",
  error: { hasError: null, message: "" },
  isLoading: false,
  overlay: false,
};

export const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    addVideos(state, { payload }: PayloadAction<VideoState[]>) {
      state.videos = payload;
    },
    updateVideos(state, { payload }: PayloadAction<VideoState[]>) {
      state.videos = state.videos.concat(payload);
    },
    updateNextPageToken(state, { payload }: PayloadAction<string>) {
      state.nextPageToken = payload;
    },
    triggerError(state, { payload }: PayloadAction<AxiosError>) {
      state.error = payload;
    },
    setIsLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
    setOverlay(state, { payload }: PayloadAction<boolean>) {
      state.overlay = payload;
    },
  },
});

export const videosActions = videosSlice.actions;
export default videosSlice.reducer;
export const videosSelector = (state: RootState) => state.videos;

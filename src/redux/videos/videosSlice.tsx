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

export interface StaState {
  views: string;
  comments: string;
  videoId: string;
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
  statistics: StaState[];
  relatedVideos: VideoState[];
}

const initialState: VideosState = {
  videos: [],
  relatedVideos: [],
  statistics: [],
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
    addRelatedVideos(state, { payload }: PayloadAction<VideoState[]>) {
      state.relatedVideos = payload;
    },
    addStatictics(state, { payload }: PayloadAction<StaState[]>) {
      state.statistics = state.statistics.concat(payload);
    },
    updateVideos(state, { payload }: PayloadAction<VideoState[]>) {
      state.videos = state.videos.concat(payload);
    },
    updateRelatedVideos(state, { payload }: PayloadAction<VideoState[]>) {
      state.relatedVideos = state.relatedVideos.concat(payload);
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

import { configureStore } from "@reduxjs/toolkit";
import { ContainerSlice } from "./slice";

export const store = configureStore({
  reducer: {
    containerSlice: ContainerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

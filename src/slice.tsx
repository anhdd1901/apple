import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ContainerState {
  isApple: boolean;
}

const initialState: ContainerState = {
  isApple: false,
};

const containerSlice = createSlice({
  name: "container",
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<boolean>) => {
      state.isApple = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const ContainerAction = containerSlice.actions;
export const ContainerSlice = containerSlice.reducer;

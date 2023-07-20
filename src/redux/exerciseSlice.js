import { createSlice } from "@reduxjs/toolkit";

export const exerciseSlice = createSlice({
  // 리듀서 이름
  name: "exercise",
  // 초기값
  initialState: { value: [] },
  reducers: {
    addExercise: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    deleteExercise: (state, action) => {
      const id = action.payload;
      state.value = state.value.filter((ele) => ele.id !== id);
    },
  },
});

export const { addExercise, deleteExercise } = exerciseSlice.actions;

export default exerciseSlice;

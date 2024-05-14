import { createSlice } from "@reduxjs/toolkit";

const updateSlice = createSlice({
  name: "update",
  initialState: [{ index: 0, bool: false }],
  reducers: {
    updateIndex: (state, action) => {
      state[0] = {
        index: action.payload,
        bool: true,
      };
      return state
    },
  },
});

export default updateSlice.reducer;
export const { updateIndex } = updateSlice.actions;

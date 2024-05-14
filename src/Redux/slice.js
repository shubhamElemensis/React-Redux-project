import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [
      {
        postTitle: "Rich dad poor dad",
        auhtor: "Manav behara",
        content: "How to manage money and make money by money",
      },
    ],
  },
  reducers: {
    addPost: (state, action) => {
      state.posts.push({
        postTitle: action.payload.postTitle,
        auhtor: action.payload.auhtor,
        content: action.payload.content,
      });
    },
    deletePost: (state, action) => {
      state.posts.splice(action.payload, 1);
    },
  },
});
export default postSlice.reducer;
export const { addPost, deletePost } = postSlice.actions;

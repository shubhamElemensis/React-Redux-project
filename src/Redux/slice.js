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
      {
        postTitle: "RD sharma",
        auhtor: "RD sharma",
        content: "How to manage money and make money by money",
      },
    ],
  },
  reducers: {
    addPost: (state, action) => {
      const { postTitle, auhtor, content } = action.payload;
      state.posts.push({
        postTitle,
        auhtor,
        content,
      });
    },
    deletePost: (state, action) => {
      state.posts.splice(action.payload, 1);
    },
    updatePost: (state, action) => {
      state.posts[action.payload.index] = {
        postTitle: action.payload.postTitle,
        auhtor: action.payload.auhtor,
        content: action.payload.content,
      };
    },
  },
});
export default postSlice.reducer;
export const { addPost, deletePost, updatePost } = postSlice.actions;

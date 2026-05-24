import { createSlice } from "@reduxjs/toolkit";
const mockPosts = [
  {
    id: 1,
    writerName: "크루루",
    tweetId: "@helloruru",
    content: "안녕 트위터!",
  },
  {
    id: 2,
    writerName: "고래아저씨",
    tweetId: "@hohohoho",
    content: "얘들아 안녕 반갑다",
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState: mockPosts,
  reducers: {
    addPost: (state, action) => {
      const newPost = {
        id: Date.now(),
        writerName: "따개비루",
        tweetId: "@iamroo",
        content: action.payload,
      };
      state.unshift(newPost);
    },
  },
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;

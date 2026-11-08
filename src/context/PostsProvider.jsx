import { useReducer } from "react";
import initialPosts from "../data/posts";
import { PostsContext } from "./PostsContext";
import { postsReducer } from "../reducers/postReducer";


export default function PostsProvider({ children }) {
  const [posts, dispatch] = useReducer(postsReducer, initialPosts);

  return (
    <PostsContext.Provider value={{ posts, dispatch }}>
      {children}
    </PostsContext.Provider>
  );
}
import { createContext, useContext } from "react";
/*an empty container for shared data with a default value of undefined
undefined shows up if a component reads it from outside the Provider
*/
export const PostsContext = createContext(undefined);

/* custom hook that components calls instead of 
  calling useContext(PostsContext) every time
*/
export default function usePosts() {
  //calls useContext(PostsContext) to read the value
  const context = useContext(PostsContext);

  //if context is undefined it throws an error
  if (context === undefined) {
    throw new Error("usePosts must be used inside of the PostContext.Provider");
  }

  return context;
}
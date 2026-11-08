import usePosts from "../context/PostsContext";

export default function BlogPosts() {
   const { posts } = usePosts()

  return (
    <div>
      <h2 className="text-6xl my-20">Post</h2>

    </div>
  );
}
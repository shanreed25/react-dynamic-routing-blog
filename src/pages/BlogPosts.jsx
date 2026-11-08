import { Link } from "react-router-dom";
import usePosts from "../context/PostsContext";

export default function BlogPosts() {
  const { posts } = usePosts()
  return (
    <div>
      <h2 className="text-6xl my-20">Blog Posts</h2>

      <ul className="grid lg:grid-cols-3 gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <li key={post.id} className="p-15 rounded-xl border-2 border-teal-500 bg-[#0f0e17]">
            <Link to={`/blog/${post.slug}`} >
              <p>{post.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

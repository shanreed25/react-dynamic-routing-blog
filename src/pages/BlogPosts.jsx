import { Link } from "react-router-dom";
import usePosts from "../context/PostsContext";
import { styles } from "../styles/styles";

export default function BlogPosts() {
  const { posts } = usePosts()
  return (
    <div className="flex flex-col mx-20">
      <h2 className="text-6xl my-20">Blog Posts</h2>

      <ul className="grid lg:grid-cols-3 gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <li key={post.id} className="p-15 rounded-xl border-2 border-teal-500 bg-[#0f0e17]">
            <Link to={`/blog/${post.slug}`} >
              <p>{post.title}</p>
              <p>{post.date}</p>
              <div className="flex gap-5 my-5">{post.tags.map((tag) => (
                <span key={tag} className={styles.tagPills}>{tag}</span>
              ))}</div>
              <p>{post.excerpt}.....</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

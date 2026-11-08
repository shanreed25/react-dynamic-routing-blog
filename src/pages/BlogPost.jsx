import { useParams } from "react-router-dom";
import usePosts from "../context/PostsContext";

export default function BlogPosts() {
  //get the posts
  const { posts } = usePosts();

  /* the route path is "/blog/:slug" and the dynamic part is :slug
      useParams() reads the dynamic part of the URL, so for 
      /blog/react-apps gives { slug: "react-apps" }, and { slug }
      gets just react-apps
   */
  const { slug } = useParams();

  //use the slug to find the index of the current post
  const currentPostIndex = posts.findIndex((post) => post.slug === slug);
  //use the index of the current post to get the post object
  const post = posts[currentPostIndex];
  console.log(post);

  if (post === undefined) {
    return (
      <div>
        <h2 className="text-white text-6xl my-20">Post Not Found</h2>
      </div>
    );
  }

  return (
    <article className="text-white">
      <h2 className="text-6xl my-20">{post.title}</h2>
      <p>{post.content}</p>
    </article>
  );
}

import { useParams } from "react-router-dom";
import usePosts from "../context/PostsContext";
import { styles } from "../styles/styles";

export default function BlogPost() {
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


  if (post === undefined) {
    return (
      <div>
        <h2 className="text-6xl my-20">Post Not Found</h2>
      </div>
    );
  }

  return (
    <article className="flex flex-col gap-5 p-15">
      <h2 className="text-6xl my-20">{post.title}</h2>
      <p>{post.date}</p>
      <div className="flex gap-5 my-5">{post.tags.map((tag) => (
                      <span key={tag} className={styles.tagPills}>{tag}</span>
                    ))}</div>
      <div className=" flex flex-col gap-5 p-15 rounded-xl border-2 border-teal-500 bg-[#0f0e17]">
          <p>{post.content}</p>
      </div>
      
    </article>
  );
}

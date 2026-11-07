import posts from '../data/posts'

export default function BlogPosts(){
    return( 
    <div>
        <h2>Blog Post</h2>
        {posts.map((post) => (
            <p key={post.id}>{post.title}</p>
        ))}
    </div>
)
}
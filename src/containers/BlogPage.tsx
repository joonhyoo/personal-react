import blogs from "../assets/posts/blog.json";
import Post from "../components/Post";

function BlogPage() {
  // Assuming blogs is an array of blog post objects
  const data = blogs;

  // Optionally, you can sort the blog posts by some criteria if needed
  data.sort((a, b) => b.id - a.id);

  return (
    <div className="section-container tertiary text-light">
      <h1 className="section-subheading"></h1>
      <h1 className="section-heading">Blogs</h1>
      <h2 className="section-subheading">Latest Blogs</h2>
      <div className="blog-preview text-dark">
        {data.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default BlogPage;

import "../styles/blog.css";
import "../styles/general.css";
import BlogPreview from "../components/BlogPreview";

function Blog() {
  return (
    <div className="blog-container section-container tertiary text-light">
      <h1 className="section-heading">Blogs</h1>
      <h1 className="section-subheading">Recent Posts</h1>
      <BlogPreview />
    </div>
  );
}

export default Blog;

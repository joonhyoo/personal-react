import "../styles/blog.css";
import "../styles/general.css";
import BlogPreview from "../components/BlogPreview";

function Blog() {
  return (
    <div className="section-container tertiary text-light anchor" id="blogs">
      <h1 className="section-heading">Blogs</h1>
      <h1 className="section-subheading">Recent Posts</h1>
      <BlogPreview />
    </div>
  );
}

export default Blog;

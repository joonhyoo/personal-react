import "../styles/blog.css";
import "../styles/general.css";
import BlogPreview from "../components/BlogPreview";
import blogs from "../assets/posts/blog.json";

function Blog() {
  const data = blogs;
  data.sort((a, b) => {
    return b.id - a.id;
  });
  return (
    <div className="section-container tertiary text-light anchor" id="blogs">
      <h1 className="section-heading">Blogs</h1>
      <h1 className="section-subheading">Recent Posts</h1>
      <BlogPreview />
    </div>
  );
}

export default Blog;

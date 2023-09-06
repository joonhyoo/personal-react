import { Button } from "react-bootstrap";
import Post from "./Post";
import blogs from "../assets/posts/blog.json";
import "../styles/blog.css";
import "../styles/general.css";
import { Link } from "react-router-dom";

function BlogPreview() {
  const data = blogs;
  data.sort((a, b) => {
    return b.id - a.id;
  });

  return (
    <div className="blog-preview text-dark">
      <Post post={data[0]} />
      <Post post={data[1]} />
      <Link to="/blogs">
        <Button variant="outline-light">More Posts</Button>
      </Link>
    </div>
  );
}

export default BlogPreview;

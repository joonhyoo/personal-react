import { Button } from "react-bootstrap";
import Post from "./Post";
import blogs from "../assets/posts/blog.json";
import "../styles/blog.css";
import "../styles/general.css";

function BlogPreview() {
  const data = blogs;
  data.sort((a, b) => {
    return b.id - a.id;
  });

  return (
    <div className="blog-preview text-dark">
      <Post post={data[0]} />
      <Post post={data[1]} />
      <a href="/blogs">
        <Button variant="outline-light">More Posts</Button>
      </a>
    </div>
  );
}

export default BlogPreview;

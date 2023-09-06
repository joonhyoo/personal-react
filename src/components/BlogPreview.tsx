import { Button, Nav } from "react-bootstrap";
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
      <Nav.Link href="/blogs">
        <Button variant="outline-light">More Posts</Button>
      </Nav.Link>
    </div>
  );
}

export default BlogPreview;

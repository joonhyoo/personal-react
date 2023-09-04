import "../styles/blog.css";
import "../styles/general.css";
import { useNavigate } from "react-router-dom";

function BlogPreview() {
  const redirect = useNavigate();
  function handleClick() {
    redirect("/blogs");
  }
  return (
    <div className="blog-preview text-dark">
      <div className="post light" onClick={handleClick}>
        <h2 className="">Learning New Stuff</h2>
        <p>
          So I did a thing, and it was great. Honestly learning this new
          information really opened my eyes ...
        </p>
      </div>
      <div className="post light" onClick={handleClick}>
        <h2>What it's been like to build websites</h2>
        <p>
          Building websites from scratch has been a dream come true. From
          someone who started ...
        </p>
      </div>
    </div>
  );
}

export default BlogPreview;

import { useEffect, useState } from "react";
import blogs from "../assets/posts/blog.json";
import Post from "../components/Post";
import { Button } from "react-bootstrap";

function BlogPage() {
  const numSorted = [...blogs].sort((a, b) => {
    return b.id - a.id;
  });

  const alphaSorted = [...blogs].sort((a, b) => {
    const textA = a.title.toUpperCase();
    const textB = b.title.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });

  const options = ["a - z", "recent"];
  const [data, setData] = useState(numSorted);
  const [option, setOption] = useState(options[0]);

  useEffect(() => {
    if (option === options[0]) {
      setData(alphaSorted);
    } else {
      setData(numSorted);
    }
  }, [option]);

  function handleClick() {
    const choice = option === options[0] ? options[1] : options[0];
    setOption(choice);
  }

  return (
    <div className="section-container tertiary text-light">
      <h1 className="section-subheading"></h1>
      <h1 className="section-heading">Blogs</h1>
      <h2 className="section-subheading">Latest Blogs</h2>
      <div className="sort-button">
        <Button variant="dark" onClick={handleClick}>
          sorted by {option}
        </Button>
      </div>
      <div className="blog-preview text-dark">
        {data.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default BlogPage;

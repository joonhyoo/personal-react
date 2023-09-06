import { useState } from "react";
import "../styles/post.css";

export interface PostType {
  title: string;
  content: string;
  date: string;
  id: number;
}

export interface Props {
  post: PostType;
}

function Post(props: Props) {
  const { title, content, date } = props.post;
  const [desc, setContent] = useState(
    content.split(" ").slice(0, 19).join(" ") + " . . ."
  );
  const [isExpanded, setIsExpanded] = useState(false);
  // handleClick works weird because react updates things after the function is fully run
  function handleClick() {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      setContent(desc);
    }
  }
  return (
    <div className="post light" onClick={handleClick}>
      <div className="post-info">
        <h1>{title}</h1>
        <p className="text-misc">{date}</p>
      </div>
      <div className="post-content">{isExpanded ? content : desc}</div>
    </div>
  );
}

export default Post;

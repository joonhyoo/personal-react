import { useNavigate } from "react-router-dom";
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
  const redirect = useNavigate();
  function handleClick() {
    redirect("/blogs");
  }
  return (
    <div className="post light" onClick={handleClick}>
      <div className="post-info">
        <a />
        <h1>{title}</h1>
        <p className="text-misc">{date}</p>
      </div>
      <p>{content}</p>
    </div>
  );
}

export default Post;

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

  return (
    <div className="post light">
      <div className="post-info">
        <h1>{title}</h1>
        <p className="text-misc">{date}</p>
      </div>
      <div className="post-content">{content}</div>
    </div>
  );
}

export default Post;

import Post from "../Post/Post";
import "./Posts.css";

const Posts = ({ posts }) => {
  return (
    <div className='posts'>
      {posts.map((post, i) => (
        <Post post={post} key={i}/>
      ))}
    </div>
  );
};

export default Posts;

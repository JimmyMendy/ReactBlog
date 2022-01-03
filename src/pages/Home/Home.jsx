import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../Components/Header/Header";
import Posts from "../../Components/Posts/Posts";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./home.css";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setposts] = useState([]);
  const {search} = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`/posts${search}`);
      setposts(response.data)
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className='home'>
        <Posts posts={posts}/>
        <Sidebar />
      </div>
    </>
  );
};

export default Home;

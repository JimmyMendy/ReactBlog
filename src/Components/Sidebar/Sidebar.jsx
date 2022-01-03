import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./sidebar.css";

const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img
          src='https://images.pexels.com/photos/7645825/pexels-photo-7645825.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
          alt='me'
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem eligendi saepe consectetur cum atque pariatur ipsum
          aperiam quae.
        </p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          {cats.map((cat, i) => (
            <Link key={i} className='link' to={`/?cat=${cat.name}`}>
              <li  className='sidebarListItem'>
                {cat.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className='sidebarSocial'>
          <i className='sidebarIcon fab fa-facebook-square'></i>
          <i className='sidebarIcon fab fa-twitter-square'></i>
          <i className='sidebarIcon fab fa-pinterest-square'></i>
          <i className='sidebarIcon fab fa-instagram-square'></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

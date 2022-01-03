import { useContext } from "react";
import { LOGOUT } from "../../context/ActionTypes";
import { Context } from "../../context/Context";
import { Link, useNavigate } from "react-router-dom";
import "./topbar.css";

const Topbar = () => {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  let navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: LOGOUT });
    window.location.replace("/");
    // navigate.push("/");
  };

  return (
    <div className='top'>
      <div className='topLeft'>
        <i className='topIcon fab fa-facebook-square'></i>
        <i className='topIcon fab fa-twitter-square'></i>
        <i className='topIcon fab fa-pinterest-square'></i>
        <i className='topIcon fab fa-instagram-square'></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link className='link' to='/'>
              HOME
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/about'>
              ABOUT
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/contact'>
              CONTACT
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/write'>
              WRITE
            </Link>
          </li>
          <li className='topListItem' onClick={handleLogout}>
            {user && (
              <Link className='link' to='/logout'>
                LOGOUT
              </Link>
            )}
          </li>
        </ul>
      </div>
      <div className='topRight'>
        {user ? (
          <Link to='/settings'>
            <img
              className='topImage'
              src={PF + user.profilePicture}
              alt='avatar'
            />
          </Link>
        ) : (
          <ul className='topList'>
            <li className='topListItem'>
              <Link className='link' to='/login'>
                LOGIN
              </Link>
            </li>
            <li className='topListItem'>
              <Link className='link' to='/register'>
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className='topSearchIcon fas fa-search'></i>
      </div>
    </div>
  );
};

export default Topbar;

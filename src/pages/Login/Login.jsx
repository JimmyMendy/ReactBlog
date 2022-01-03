import "./login.css";
import axios from "axios"
import { LOGINSTART, LOGINSUCCESS, LOGINFAILURE } from "../../context/ActionTypes";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useContext } from "react";
import { Context } from "../../context/Context";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  let navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({type: LOGINSTART })
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value
      })
      dispatch({type: LOGINSUCCESS, payload: res.data })
      navigate.push('/')
    } catch (error) {
      dispatch({type: LOGINFAILURE })
    }
  }
  
  return (
    <div className='login'>
      <span className='loginTitle'>Login</span>
      <form className='loginForm' onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className='loginInput'
          type='text'
          placeholder='Enter your username...'
          ref={userRef}
        />
        <label>Password</label>
        <input
          className='loginInput'
          type='password'
          placeholder='Enter your password'
          ref={passwordRef}
        />
        <button className='logButton' type='submit' >
          Login
        </button>
      </form>
      <button className='loginRegisterButton'>
        <Link className='link' to='/register'>
          Register
        </Link>
      </button>
    </div>
  );
};

export default Login;

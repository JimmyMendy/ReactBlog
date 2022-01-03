import axios from "axios";
import "./settings.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import {
  UPDATEFAILURE,
  UPDATESTART,
  UPDATESUCCESS,
} from "../../context/ActionTypes";

const Settings = () => {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: UPDATESTART });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePicture = filename;

      try {
        await axios.post("/upload", data);
      } catch (error) {
        alert("Error has occurred!", error);
      }
    }
    try {
      const res = await axios.put(`/users/${user._id}`, updatedUser);
      setSuccess(true);
      dispatch({ type: UPDATESUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: UPDATEFAILURE });
      alert("Error has occurred!", error);
    }
  };

  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingsUpdateTitle'>Update your account</span>
          <span className='settingsDeleteTitle'>Delete your account</span>
        </div>
        <form className='settingsForm' onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className='settingsPP'>
            <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePicture}
              alt='avatar'
            />
            <label htmlFor='fileInput'>
              <i className=' settingsPPIcon far fa-user-circle'></i>
            </label>
            <input
              type='file'
              id='fileInput'
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type='text'
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type='email'
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='settingsSubmit' type='submit'>
            update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;

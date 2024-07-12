import "./Profile.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const Profile = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [edit, setedit] = useState(true);

  const userview = (edit: boolean) => {
    if (edit == true) {
      return (
        <div>
          <div className="profblock">
            <div className="profblock-wrapper">
              <p className="proftext">
                Username: <p className="profdetail">{username}</p>
              </p>
              <p className="proftext">
                Email: <p className="profdetail">{email}</p>
              </p>
              <p className="proftext">
                Password: <p className="profdetail">{pass}</p>
              </p>
            </div>
          </div>
          <div className="viewbutton">
            <button className="view" onClick={() => setedit(false)}>
              Edit Details
            </button>
            <Link className="nounder" to="/">
              <button className="view">Logout</button>
            </Link>
          </div>
        </div>
      );
    }
    if (edit == false) {
      return (
        <form>
          <div className="profblock">
            <div className="profblock-wrapper">
              <p className="proftext">
                Username:
                <input
                  type="text"
                  className="edit"
                  placeholder={username}
                ></input>
              </p>
              <p className="proftext">
                Email:
                <input type="text" className="edit" placeholder={email}></input>
              </p>
              <p className="proftext">
                Password:
                <input
                  className="edit"
                  type="password"
                  placeholder="Enter your new password"
                ></input>
              </p>
              <p className="proftext">
                Confirm Password:
                <input
                  type="password"
                  className="edit"
                  placeholder="Confirm new password"
                ></input>
              </p>
            </div>
          </div>
          <button className="editbutton" onClick={() => setedit(true)}>
            Save
          </button>
        </form>
      );
    }
  };

  return (
    <div>
      <Navbar />
      <span className="inline">
        <img className="logo" src="./src/images/logo.png" />
        <div>
          <p className="header">ACCOUNT DETAILS</p>
        </div>
      </span>
      <div>
        <img className="logo" src="./src/images/profpic.png" />
        <h3 className="userprof">YOUR USER PROFILE</h3>
      </div>
      {userview(edit)}
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Profile;

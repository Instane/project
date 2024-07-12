import "./Profile.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const Profile = () => {
  let testflag = true; //To enable or disable verification features

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [conpass, setConpass] = useState("");
  const [edit, setEdit] = useState(true);

  function verify() {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (testflag) {
      if (!username || !email || !pass || !conpass) {
        alert("Please enter the required information.");
      } else if (!re.test(email)) {
        alert("Please enter a valid email format.");
      } else if (pass != conpass) {
        alert("Passwords do not match, please try again.");
      } else {
        setEdit(true);
      }
    } else {
      setEdit(true);
    }
  }

  const handleClick = () => {
    alert("You are now logged out.");
  };

  const userview = (edit: boolean) => {
    if (edit) {
      return (
        <div>
          <div className="profblock">
            <div className="profblock-wrapper">
              <p className="proftext">
                Username: <span className="profdetail">{username}</span>
              </p>
              <p className="proftext">
                Email: <span className="profdetail">{email}</span>
              </p>
              <p className="proftext">
                Password: <span className="profdetail pw">{pass}</span>
              </p>
            </div>
          </div>
          <div className="viewbutton">
            <button className="view" onClick={() => setEdit(false)}>
              <img className="logo4" src="./src/images/edit.png" alt="Edit" />
              <p className="logtext">Edit Details</p>
            </button>
            <Link className="nounder" to="/">
              <button className="view" onClick={handleClick}>
                <img className="logo4" src="./src/images/exit.png" alt="Exit" />
                <p className="logtext">Logout</p>
              </button>
            </Link>
          </div>
        </div>
      );
    } else {
      return (
        <form>
          <div className="profblock">
            <div className="profblock-wrapper">
              <p className="proftext">
                Username:
                <input
                  type="text"
                  className="edit"
                  placeholder="e.g. John123"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </p>
              <p className="proftext">
                Email:
                <input
                  type="text"
                  className="edit"
                  placeholder="e.g. John123@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </p>
              <p className="proftext">
                Password:
                <input
                  type="password"
                  className="edit"
                  placeholder="Password"
                  onChange={(e) => setPass(e.target.value)}
                />
              </p>
              <p className="proftext">
                Confirm Password:
                <input
                  type="password"
                  className="edit"
                  placeholder="Confirm new password"
                  onChange={(e) => setConpass(e.target.value)}
                />
              </p>
            </div>
          </div>
          <div className="viewbutton">
            <button type="button" className="editbutton" onClick={verify}>
              <p className="logtext">Save</p>
            </button>
            <button
              type="button"
              className="editbutton"
              onClick={() => setEdit(true)}
            >
              <p className="logtext">Cancel</p>
            </button>
          </div>
        </form>
      );
    }
  };

  return (
    <div>
      <Navbar />
      <div className="inline">
        <img className="logo" src="./src/images/logo.png" alt="Logo" />
        <div>
          <p className="header">ACCOUNT DETAILS</p>
        </div>
      </div>
      <div>
        <img
          className="userlogo"
          src="./src/images/profpic.png"
          alt="Profile"
        />
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

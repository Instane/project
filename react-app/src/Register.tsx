import "./App.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  let testflag = true; //To enable or disable verification features

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [conpass, setConpass] = useState("");
  const navigate = useNavigate();

  function verify() {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (testflag) {
      if (!username || !email || !password || !conpass) {
        alert("Please enter the required information.");
      } else if (!re.test(email)) {
        alert("Please enter a valid email format.");
      } else if (password != conpass) {
        alert("Passwords do not match, please try again.");
      } else {
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }

  return (
    <div className="blockdisplay">
      <img src="./src/images/logo.png" />
      <h1> User Registration </h1>
      <div>
        <br />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
          value={conpass}
          onChange={(e) => setConpass(e.target.value)}
        />
        <button className="register" onClick={verify}>
          REGISTER
        </button>
        <div className="signuptext">
          <p>Already have an existing account?</p>
          <Link className="link" to="/">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

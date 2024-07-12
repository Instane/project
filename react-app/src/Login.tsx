import "./App.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  let testflag = true; //To enable or disable verification features

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function verify() {
    if (testflag) {
      if (!username || !password) {
        alert("Please enter the required information.");
      } else {
        navigate("/home");
      }
    } else {
      navigate("/home");
    }
  }

  return (
    <div className="blockdisplay">
      <div>
        <img src="./src/images/logo.png" />
        <h1>USER LOGIN</h1>
      </div>
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
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={verify}>LOG IN</button>
      </div>
      <div className="signuptext">
        <p>Don't have an account?</p>
        <Link className="link" to="/register">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;

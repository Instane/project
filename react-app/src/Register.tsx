import "./App.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="blockdisplay">
      <img src="./src/images/logo.png" />
      <h1> User Registration </h1>
      <div>
        <form>
          <br />
          <input type="text" id="username" placeholder="Username" />
          <br />
          <input type="text" id="email" placeholder="Email Address" />
          <br />
          <input type="password" id="password" placeholder="Password" />
          <br />
          <input type="password" id="conpass" placeholder="Confirm Password" />
          <Link to="/">
            <button className="register">REGISTER</button>
          </Link>
        </form>
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

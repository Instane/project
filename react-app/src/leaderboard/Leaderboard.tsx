import "./Leaderboard.css";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const Leaderboard = () => {
  return (
    <div>
      <Navbar />
      <span className="inline">
        <img className="logo" src="./src/images/logo.png" />
        <div>
          <p className="header">LEADERBOARD</p>
        </div>
      </span>
      <div>
        <h2>TOP WINS ENGLISH:</h2>
        <div className="bigdatablocks"></div>
        <h2>TOP WINS MATHS:</h2>
        <div className="bigdatablocks"></div>
        <h2>TOP WINS GEOGRAPHY:</h2>
        <div className="bigdatablocks"></div>
        <h2>TOP WINS SCIENCE:</h2>
        <div className="bigdatablocks"></div>
        <h2>TOP WINS HISTORY:</h2>
        <div className="bigdatablocks"></div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Leaderboard;

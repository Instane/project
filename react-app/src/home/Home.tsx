import "./Home.css";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const Home = () => {
  let rank = 1,
    total = 10,
    won = 5,
    lost = 5;

  return (
    <div>
      <Navbar />
      <span className="inline">
        <img className="logo" src="./src/images/logo.png" />
        <div>
          <p className="header">HOMEPAGE</p>
          <p className="subhead">
            Welcome <p id="username" />
          </p>
        </div>
      </span>
      <div>
        <span className="inline">
          <div className="datablocks">
            <p className="blockheader">BATTLE DETAILS</p>
            <li>Total Battles: {total}</li>
            <li>Battles Won: {won}</li>
            <li>Battles Lost: {lost}</li>
          </div>
          &nbsp;&nbsp;&nbsp;
          <div className="datablocks">
            <p className="blockheader">CURRENT LEAGUE</p>
            <div className="rank-wrapper">
              <img className="ranklogo" src="./src/images/home.png" />
            </div>
          </div>
        </span>
        <div className="bigdatablocks"></div>
        <div className="bigdatablocks"></div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;

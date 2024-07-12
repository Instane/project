import "./Home.css";
import Navbar from "../navbar/Navbar";
import { useState } from "react";

const Home = () => {
  const [currentrank, setCurrentRank] = useState(1);
  const [totalgames, setTotalGames] = useState(10);
  const [totalwins, setTotalWins] = useState(5);
  const [totallose, setTotalLose] = useState(5);

  const ranks = () => {
    if (currentrank === 1) {
      return (
        <div>
          <img className="ranklogo" src="./src/images/bronze.png" />
        </div>
      );
    }
    if (currentrank === 2) {
      return (
        <div>
          <img className="ranklogo" src="./src/images/silver.png" />
        </div>
      );
    }
    if (currentrank === 3) {
      return (
        <div>
          <img className="ranklogo" src="./src/images/gold.png" />
        </div>
      );
    }
  };

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
            <li>Total Battles: {totalgames}</li>
            <li>Battles Won: {totalwins}</li>
            <li>Battles Lost: {totallose}</li>
          </div>
          &nbsp;&nbsp;&nbsp;
          <div className="datablocks">
            <div className="rank-wrapper">
              <p className="blockheaders1">CURRENT LEAGUE</p>
              {ranks()}
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

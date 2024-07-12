import "./History.css";
import { useState } from "react";
import Navbar from "../navbar/Navbar";

const History = () => {
  const [matches] = useState([
    {
      category: "English",
      status: "WON",
      type: "Multiplayer",
      score: 200,
      opscore: 100,
    },
    {
      category: "Maths",
      status: "LOST",
      type: "Multiplayer",
      score: 100,
      opscore: 200,
    },
    {
      category: "Geography",
      status: "",
      type: "SinglePlayer",
      score: 200,
      opscore: null,
    },
  ]);

  function Matches(props: {
    category: String;
    status: String;
    type: String;
    score: number;
    opscore: number;
  }) {
    return (
      <div className="bigdatablocks2">
        <div className="bigdatablocks-wrapper">
          <div className="inlinefont">
            <p className="hisfont1">{props.category}</p>
            <p className="hisfont3">{props.type}</p>
          </div>
          <p className="hisfont">{props.status}</p>
          <p className="hisfont2">Your Score: {props.score}</p>
          <p className="hisfont2">Opponents Score: {props.opscore}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <span className="inline">
        <img className="logo" src="./src/images/logo.png" />
        <div>
          <p className="header">HISTORY</p>
        </div>
      </span>
      <div>
        {matches.map((match, index) => {
          return (
            <Matches
              key={index}
              category={match.category}
              status={match.status}
              type={match.type}
              score={match.score}
              opscore={match.opscore}
            />
          );
        })}
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default History;

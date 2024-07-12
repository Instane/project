import "./Gameplay.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App";

const Gameplay = () => {
  const [question, setQuestion] = useState(1);
  const [givenQuestion, setgivenQuestion] = useState("-");
  const [score, setScore] = useState(5);
  const [typeno, settypeno] = useState(0);
  const [seconds, setseconds] = useState(60);
  const navigate = useNavigate();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (seconds > 0) {
      timer = setTimeout(() => setseconds(seconds - 1), 1000);
    } else {
      next();
    }
    return () => clearTimeout(timer);
  }, [seconds]);

  useEffect(() => {
    if (question === 10) {
      navigate("/");
    }
  });

  function next() {
    setQuestion((prevQuestion) => prevQuestion + 1);
    setseconds(60);
  }

  const questiontype = (typeno: number) => {
    if (typeno == 1) {
      return (
        <div>
          <div className="topheading">
            <button className="datablocks4">
              <p className="wrapper">True</p>
            </button>
            <button className="datablocks4">
              <p className="wrapper">False</p>
            </button>
          </div>
        </div>
      );
    }

    if (typeno == 2) {
      return (
        <div>
          <div className="topheading">
            <input type="text" placeholder="Answer here"></input>
          </div>
        </div>
      );
    } else
      return (
        <div>
          <div className="topheading">
            <button className="datablocks4">
              <p className="wrapper">{}</p>
            </button>
            <button className="datablocks4">
              <p className="wrapper">{}</p>
            </button>
          </div>
          <div className="topheading">
            <button className="datablocks4">
              <p className="wrapper">{}</p>
            </button>
            <button className="datablocks4">
              <p className="wrapper">{}</p>
            </button>
          </div>
        </div>
      );
  };

  return (
    <div>
      <div>
        <img src="./src/images/logo.png" />
        <p className="item">ENGLISH</p>
      </div>
      <div>
        <p className="question"> Time Left: {seconds}</p>
        <p className="question"> QUESTION {question}:</p>
        <div className="givenques">
          <p> {givenQuestion} </p>
        </div>
        {questiontype(typeno)}
      </div>
      <div className="botheading">
        <p className="question"> Your current score: {score} </p>
        <div>
          <button onClick={next}>Next &gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Gameplay;

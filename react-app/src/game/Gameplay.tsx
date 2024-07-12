import "./Gameplay.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App";

const Gameplay = () => {
  const [question, setQuestion] = useState(1);
  const [givenQuestion, setgivenQuestion] = useState("");
  const [score, setScore] = useState(0);
  const [typeno, settypeno] = useState(1);
  const [seconds, setseconds] = useState(60);
  const [selectedbutton, setSelectedButton] = useState(null);
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
    if (question > 10) {
      navigate("/gameend");
    }
  });

  function next() {
    setQuestion((prevQuestion) => prevQuestion + 1);
    setSelectedButton(null);
    setseconds(60);
  }

  const questiontype = (typeno: number) => {
    if (typeno === 1) {
      return (
        <div>
          <div className="topheading">
            <button
              className={`datablocks4 ${
                selectedbutton === true ? "selected" : ""
              }`}
              onClick={() => setSelectedButton(true)}
            >
              <p className="wrapper">True</p>
            </button>
            <button
              className={`datablocks4 ${
                selectedbutton === false ? "selected" : ""
              }`}
              onClick={() => setSelectedButton(false)}
            >
              <p className="wrapper">False</p>
            </button>
          </div>
        </div>
      );
    } else
      return (
        <div>
          <div className="topheading">
            <button
              id="ans1"
              className={`datablocks4 ${
                selectedbutton === "ans1" ? "selected" : ""
              }`}
              onClick={() => setSelectedButton("ans1")}
            >
              <p className="wrapper">{}</p>
            </button>
            <button
              id="ans2"
              className={`datablocks4 ${
                selectedbutton === "ans2" ? "selected" : ""
              }`}
              onClick={() => setSelectedButton("ans2")}
            >
              <p className="wrapper">{}</p>
            </button>
          </div>
          <div className="topheading">
            <button
              id="ans3"
              className={`datablocks4 ${
                selectedbutton === "ans3" ? "selected" : ""
              }`}
              onClick={() => setSelectedButton("ans3")}
            >
              <p className="wrapper">{}</p>
            </button>
            <button
              id="ans4"
              className={`datablocks4 ${
                selectedbutton === "ans4" ? "selected" : ""
              }`}
              onClick={() => setSelectedButton("ans4")}
            >
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
        <p className="question"> Time Left: {seconds} seconds left</p>
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

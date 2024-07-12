import "./Selection.css";
import { Link } from "react-router-dom";

const Selection = () => {
  return (
    <div>
      <div className="header1">
        <Link className="test" to={-1}>
          <img className="logo1" src="./src/images/arrow.png" />
        </Link>
      </div>
      <span className="inline">
        <img className="logo" src="./src/images/logo.png" />
        <p className="header">GAME SELECTION</p>
      </span>
      <Link className="nounder" to="/topic">
        <div className="datablocks1">
          <div className="datablock-wrapper">
            <img className="logo2" src="./src/images/single.png" />
            <p className="blockheader1">SINGLEPLAYER</p>
          </div>
        </div>
      </Link>
      <Link className="nounder" to="/topic">
        <div className="datablocks1">
          <div className="datablock-wrapper2">
            <img className="logo2" src="./src/images/multi.png" />
            <p className="blockheader1">LOCAL MULTIPLAYER</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Selection;

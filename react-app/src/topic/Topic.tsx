import "./Topic.css";
import { Link } from "react-router-dom";

const Topic = () => {
  return (
    <div>
      <div className="header1">
        <Link className="test" to={-1}>
          <img className="logo1" src="./src/images/arrow.png" />
        </Link>
      </div>
      <span className="inline">
        <img className="logo" src="./src/images/logo.png" />
        <p className="header">TOPIC SELECTION</p>
      </span>
      <div>
        <span className="inline1">
          <div className="datablocks2">
            <div className="datablock-wrapper"></div>
          </div>
          <div className="datablocks2">
            <div className="datablock-wrapper"></div>
          </div>
        </span>
        <div>
          <span className="inline1">
            <div className="datablocks2">
              <div className="datablock-wrapper"></div>
            </div>
            <div className="datablocks2">
              <div className="datablock-wrapper"></div>
            </div>
          </span>
        </div>
        <div>
          <span className="inline1">
            <div className="datablocks2">
              <div className="datablock-wrapper"></div>
            </div>
            <div className="datablocks2">
              <div className="datablock-wrapper"></div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Topic;

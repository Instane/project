import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./home/Home";
import Selection from "./selection/Selection";
import Leaderboard from "./leaderboard/Leaderboard";
import Profile from "./profile/Profile";
import History from "./history/History";
import Topic from "./topic/Topic";
import Gameplay from "./game/Gameplay";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
        <Route path="/topic" element={<Topic />} />
        <Route path="/gameplay" element={<Gameplay />} />
      </Routes>
    </Router>
  );
}

export default App;

// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

// Pages
import MainPage from "./Pages/MainPage";
import SecondaryPage from "./Pages/SecondaryPage";
import Nav from "./Navbar/Nav.js";
import RenderPage from "./AnimalScheduler/Render.js";

axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <RenderPage />
    </div>
  );
}

export default App;

// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

// Pages
import MainPage from "./Pages/MainPage";
import SecondaryPage from "./Pages/SecondaryPage";
import Nav from "./Components/Nav";

axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <main>
          <Routes>
            <Route path="/:id" element={<SecondaryPage />}></Route>
            <Route path="/" element={<MainPage />}></Route>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;

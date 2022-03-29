// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";

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

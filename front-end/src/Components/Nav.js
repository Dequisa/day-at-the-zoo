import { Link } from "react-router-dom";
import gorilla from "../assets/zoogorilla.jpeg";
import logo from "../assets/logo.jpeg";
import plus2 from "../assets/plus.jpeg";
import "./Nav.css";

function Nav() {
  return (
    <div className="navbar">
      <img src={logo} />
      <input
        className="search"
        value="Search for Zoo Animal"
        type="text"
        unselectable="on"
      ></input>
      <button>
        {" "}
        <Link to={"/"}>Plan Your Visit </Link>
      </button>
      <button>
        {" "}
        <Link to={"/1"}>View Schedule </Link>
      </button>
      <img src={plus2} style={{ width: "3%" }} />
    </div>
  );
}

export default Nav;

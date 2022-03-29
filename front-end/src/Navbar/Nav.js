import { Link } from "react-router-dom";
// import gorilla from "../assets/zoogorilla.jpeg";
import logo from "../assets/logo.jpeg";
import plus2 from "../assets/plus.jpeg";
import "./Nav.css";

function Nav({ animalFilterOnChange }) {
  return (
    <div className="navbar">
      <div>
        {" "}
        <Link to={"/"}>
          <img src={logo} alt="bronx zoo icon" />{" "}
        </Link>
      </div>
      <input
        className="search"
        placeholder="Search for Zoo Animal"
        onChange={animalFilterOnChange}
        type="text"
        unselectable="on"
      ></input>

      <div>
        {" "}
        <Link to={"/1"}>View Schedule </Link>
      </div>
      <img src={plus2} style={{ width: "3%" }} alt="plus symbol" />
    </div>
  );
}

export default Nav;

import { Link } from "react-router-dom";
import "./Main.css";

function Main({ id, name, location, img }) {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div className="Main">
      <Link to={`/${id}`}>
        <img src={img} alt="zoo animal" />
        <h3>{name}</h3>
        <h3>{location}</h3>
      </Link>
    </div>
  );
}

export default Main;

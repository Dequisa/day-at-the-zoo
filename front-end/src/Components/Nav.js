import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <button>
        {" "}
        <Link to={"/"}>Plan Your Visit </Link>
      </button>
      <button>
        {" "}
        <Link to={"/1"}>View Schedule </Link>
      </button>
    </div>
  );
}

export default Nav;

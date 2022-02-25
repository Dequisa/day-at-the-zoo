import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Secondary.css";

function Secondary() {
  const { id } = useParams();
  const [animal, setAnimal] = useState();
  const [visit, setVisit] = useState();

  useEffect(() => {
    const singleAnimal = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/animals/${id}`);
        setAnimal(res.data);
      } catch (err) {
        console.log("Error Returned from Secondary.js animal Get request");
      }
    };
    singleAnimal();
  }, [id]);

  const handleUpdate = () => {
    setVisit(animal.name);
  };
  const handleDelete = (e) => {
    setVisit("");
  };

  return (
    <div className="Secondary">
      <div className="thumbnail">
        <button>
          <img src={animal && animal.img} alt="zoo animal" />
          <div>{animal && animal.name}</div>
          <div>{animal && animal.location}</div>
        </button>
      </div>

      <div className="schedule">
        <h2>Your Schedule</h2>
        <li> 9:00am</li>
        <div onClick={handleUpdate}>
          {visit ? <h5>{visit}</h5> : <button>Update</button>}
        </div>
        <button onClick={handleDelete}>Delete</button>
        <li>10:00am</li>
        <div onClick={handleUpdate}>
          {visit ? <h5>{visit}</h5> : <button>Update</button>}
        </div>
        <button onClick={handleDelete}>Delete</button>
        <li>11:00am</li>
        <div onClick={handleUpdate}>
          {visit ? <h5>{visit}</h5> : <button>Update</button>}
        </div>
        <button onClick={handleDelete}>Delete</button>
        <li>12:00pm</li>
        <div onClick={handleUpdate}>
          {visit ? <h5>{visit}</h5> : <button>Update</button>}
        </div>
        <button onClick={handleDelete}>Delete</button>
        <li>1:00pm</li>
        <div onClick={handleUpdate}>
          {visit ? <h5>{visit}</h5> : <button>Update</button>}
        </div>
        <button onClick={handleDelete}>Delete</button>
        <li>2:00pm</li>
        <div onClick={handleUpdate}>
          {visit ? <h5>{visit}</h5> : <button>Update</button>}
        </div>
        <button onClick={handleDelete}>Delete</button>
        <li>3:00pm</li>
        <div onClick={handleUpdate}>
          {visit ? <h5>{visit}</h5> : <button>Update</button>}
        </div>
        <button onClick={handleDelete}>Delete</button>
        <li>4:00pm</li>
        <div onClick={handleUpdate}>
          {visit ? <h5>{visit}</h5> : <button>Update</button>}
        </div>
        <button onClick={handleDelete}>Delete</button>
        <li>5:00pm</li>
        <div onClick={handleUpdate}>
          {visit ? <h5>{visit}</h5> : <button>Update</button>}
        </div>
        <button onClick={handleDelete}>Delete</button>
        <li>6:00pm</li>
        <div onClick={handleUpdate}>
          {visit ? <h5>{visit}</h5> : <button>Update</button>}
        </div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Secondary;

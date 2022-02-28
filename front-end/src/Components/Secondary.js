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
        <div> 9:00am</div>
        <div onClick={handleUpdate}>
          {visit ? <div>{visit}</div> : <button>Update</button>}
        </div>
        <button onClick={handleDelete}>Delete</button>
        <div>10:00am</div>
        <div onClick={handleUpdate}>
          {visit ? <h5>{visit}</h5> : <button>Update</button>}
        </div>
        <button onClick={handleDelete}>Delete</button>
        <div>11:00am</div>
        <div onClick={handleUpdate}>
          {visit ? <h5>{visit}</h5> : <button>Update</button>}
        </div>
        <button onClick={handleDelete}>Delete</button>
        <div>12:00pm</div>
        <div onClick={handleUpdate}>
          {visit ? <h5>{visit}</h5> : <button>Update</button>}
        </div>
        <button onClick={handleDelete}>Delete</button>
        <div>1:00pm</div>
        <div onClick={handleUpdate}>
          {visit ? <h5>{visit}</h5> : <button>Update</button>}
        </div>
        <button onClick={handleDelete}>Delete</button>
        <div>2:00pm</div>
        <div onClick={handleUpdate}>
          {visit ? <h5>{visit}</h5> : <button>Update</button>}
        </div>
        <button onClick={handleDelete}>Delete</button>
        <div>3:00pm</div>
        <div onClick={handleUpdate}>
          {visit ? <h5>{visit}</h5> : <button>Update</button>}
        </div>
        <button onClick={handleDelete}>Delete</button>
        <div>4:00pm</div>
        <div onClick={handleUpdate}>
          {visit ? <h5>{visit}</h5> : <button>Update</button>}
        </div>
        <button onClick={handleDelete}>Delete</button>
        <div>5:00pm</div>
        <div onClick={handleUpdate}>
          {visit ? <h5>{visit}</h5> : <button>Update</button>}
        </div>
        <button onClick={handleDelete}>Delete</button>
        <div>6:00pm</div>
        <div onClick={handleUpdate}>
          {visit ? <h5>{visit}</h5> : <button>Update</button>}
        </div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Secondary;

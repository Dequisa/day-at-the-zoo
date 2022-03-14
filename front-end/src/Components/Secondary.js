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
        setVisit(res.data.name);
      } catch (err) {
        console.log("Error Returned from Secondary.js animal Get request");
      }
    };
    singleAnimal();
  }, [id]);

  const handleUpdate = (e) => {
    console.log(e.target.value);
    e.target.value = visit;
    // setVisit(animal.name);
  };
  const handleDelete = (e) => {
    setVisit("");
  };

  return (
    <div className="Secondary">
      <div className="thumbnail">
        <div>
          <img src={animal && animal.img} alt="zoo animal" />
          <div>{animal && animal.name}</div>
          <div>{animal && animal.location}</div>
        </div>
      </div>

      <div className="schedule">
        <h2>Your Schedule</h2>
        <label htmlFor="9am"> 9:00am</label>
        <input type="button" value="Update" onClick={handleUpdate} />
        <input type="button" value="Delete" onClick={handleDelete} />
        <div>10:00am</div>
        <input type="button" value="Update" onClick={handleUpdate} />
        <button onClick={handleDelete}>Delete</button>
        <div>11:00am</div>
        <input type="button" value="Update" onClick={handleUpdate} />
        <input type="button" value="delete" onClick={handleDelete} />
        <div>12:00pm</div>
        <input type="button" value="Update" onClick={handleUpdate} />
        <button onClick={handleDelete}>Delete</button>
        <div>1:00pm</div>
        <input type="button" value="Update" onClick={handleUpdate} />
        <button onClick={handleDelete}>Delete</button>
        <div>2:00pm</div>
        <input type="button" value="Update" onClick={handleUpdate} />
        <button onClick={handleDelete}>Delete</button>
        <div>3:00pm</div>
        <input type="button" value="Update" onClick={handleUpdate} />
        <button onClick={handleDelete}>Delete</button>
        <div>4:00pm</div>
        <input type="button" value="Update" onClick={handleUpdate} />
        <button onClick={handleDelete}>Delete</button>
        <div>5:00pm</div>
        <input type="button" value="Update" onClick={handleUpdate} />
        <button onClick={handleDelete}>Delete</button>
        <div>6:00pm</div>
        <input type="button" value="Update" onClick={handleUpdate} />
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Secondary;

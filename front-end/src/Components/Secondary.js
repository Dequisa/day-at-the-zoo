import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Secondary.css";

function Secondary() {
  const { id } = useParams();
  const [animal, setAnimal] = useState();

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

  const handleUpdate = (e) => {
    e.target.value === "Update"
      ? (e.target.value = animal.name)
      : (e.target.value = "Update");
  };

  return (
    <div className="Secondary">
      <div className="thumbnail">
        {console.log("secondary line 36", animal)}
        <div>
          <img src={animal && animal.img} alt="zoo animal" />
          <div>{animal && animal.name}</div>
          <div>{animal && animal.location}</div>
        </div>
      </div>

      <div className="schedule">
        <h2>Your Schedule</h2>
        <label htmlFor="9am"> 9:00am :</label>
        <input type="button" value="Update" onClick={handleUpdate} />
        <div>10:00am</div>
        <input type="button" value="Update" onClick={handleUpdate} />
        <div>11:00am</div>
        <input type="button" value="Update" onClick={handleUpdate} />
        <div>12:00pm</div>
        <input type="button" value="Update" onClick={handleUpdate} />
        <div>1:00pm</div>
        <input type="button" value="Update" onClick={handleUpdate} />
        <div>2:00pm</div>
        <input type="button" value="Update" onClick={handleUpdate} />
        <div>3:00pm</div>
        <input type="button" value="Update" onClick={handleUpdate} />
        <div>4:00pm</div>
        <input type="button" value="Update" onClick={handleUpdate} />
        <div>5:00pm</div>
        <input type="button" value="Update" onClick={handleUpdate} />
        <div>6:00pm</div>
        <input type="button" value="Update" onClick={handleUpdate} />
      </div>
    </div>
  );
}

export default Secondary;

import MainPage from "../Pages/MainPage.js";
import SecondaryPage from "../Pages/SecondaryPage.js";
import Nav from "../Navbar/Nav.js";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function Render() {
  const [animals, setAnimals] = useState("");
  const [origAnimalList, setOrigAnimalList] = useState([]);

  useEffect(() => {
    const accessAnimals = async () => {
      try {
        const res = await axios.get(
          "https://zoo-planner.herokuapp.com/animals"
        );
        // const res = await axios.get("http://localhost:3001/animals");
        setAnimals(res.data);
        setOrigAnimalList(res.data);
        console.log("from nav", res.data);
      } catch (err) {
        console.log("Error Returned from acessAnimals Request: ", err);
      }
    };
    accessAnimals();
  }, []);

  const animalFilterOnChange = (e) => {
    const inputValue = e.target.value;
    // setInputValue(e.target.value);
    // e.target.reset();
    if (inputValue === "") {
      setAnimals(origAnimalList);
      return;
    }
    const filteredAnimals = origAnimalList.filter((animal) => {
      return animal.name.toLowerCase().includes(inputValue.toLowerCase());
    });
    setAnimals(filteredAnimals);
  };

  return (
    <div>
      <Router>
        <Nav animalFilterOnChange={animalFilterOnChange} />
        <main>
          <Routes>
            <Route path="/:id" element={<SecondaryPage />}></Route>
            <Route path="/" element={<MainPage animals={animals} />}></Route>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default Render;

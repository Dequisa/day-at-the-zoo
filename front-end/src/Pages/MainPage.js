import Main from "../Components/Main";
import { useState, useEffect } from "react";
import axios from "axios";

function MainPage({ animals }) {
  return (
    <div className="MainPage">
      {animals &&
        animals.map((animal) => {
          return (
            <div key={animal.animals_id}>
              <Main
                id={animal.animals_id}
                name={animal.name}
                location={animal.location}
                img={animal.img}
              />
            </div>
          );
        })}
    </div>
  );
}

export default MainPage;

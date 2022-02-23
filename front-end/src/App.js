import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState, useEffect } from "react";
// import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [reply, setReply] = useState("");

  useEffect(() => {
    const accessServer = async () => {
      try {
        // const res = await axios.get("https://zoo-planner.herokuapp.com");
        const res = await axios.get("http://localhost:3001");
        setReply(res.data);
      } catch (err) {
        console.log("Error Returned from acessServer Request: ", err);
      }
    };
    accessServer();
  }, []);
  return <h1>{reply}</h1>;
}

export default App;

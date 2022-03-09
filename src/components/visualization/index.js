import React, { useState } from "react";
import "./visual.css";
const axios = require("axios");

let userData = () => {
  return axios
    .get("https://randomuser.me/api")
    .then((res) => {
      // handle success
      console.log(res);
      let mystringobj = JSON.stringify(res);
      console.log("type", typeof mystringobj);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};

const Visual = () => {
  let [counter, setCounter] = useState(0);
  // const [ userData, setUserData] = useState("");

  return (
    <>
      <h1>React code Testing </h1>
      {/* <svg> alaa</svg> */}
      <p>{counter}</p>
      <button
        onClick={() => {
          setCounter((counter += 1));
        }}
      >
        Add count
      </button>
      <button
        onClick={() => {
          userData();
        }}
      >
        Fetch random data
      </button>
    </>
  );
};

export default Visual;

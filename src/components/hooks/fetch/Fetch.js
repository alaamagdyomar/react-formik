import React, { useMemo, useState } from "react";
import { useFetch } from "./useFetch";

function computeLongestWord(arr) {
  if (!arr) {
    return [];
  }

  console.log("usefetch is rendered");

  let longestWord = "";

  JSON.parse(arr).forEach((sentense) =>
    sentense.split(" ").forEach((word) => {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    })
  );

  return longestWord;
}

const Fetch = () => {
  const [count, setCount] = useState(0);
  const { data } = useFetch(
    "https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"
  );

  const longestWord = useMemo(() => computeLongestWord(data), [data]);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>increment </button>
      <h1>longestWord:</h1>
      <div>{longestWord}</div>;
    </>
  );
};

export default Fetch;

import { useState } from "react";

const states = [1, "Anurag Singh"];

export default function Counter({c}) {
  console.log(c);
  c="jbegwjk;"
  console.log(c);
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Anurag");

  console.log("rendering");

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>
      <h2>{name}</h2>
      <button
        onClick={() => {
          // setName('Anurag Singh')
          setCount((previousState) => previousState + 1);
          console.log(count);
          setCount((previousState) => previousState + 1);
          console.log(count);

          setCount((previousState) => previousState + 1);
          console.log(count);

          // setCount(count +5);
          // console.log("2 val", count);
          // alert(count);
          // setCount(count +9);
          // console.log("3 val", count);
        }}
      >
        Increase Count
      </button>

      <div>
       {true &&console.log("9")}

       {true?9:10}

      {}
      </div>
    </div>
  );
}

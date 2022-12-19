import {useState} from "react";

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p> you clicked {0 + count} times</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  );
}
export default Example;

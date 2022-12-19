import {useState} from "react";

const Calculator = () => {
  const [count, setCount] = useState(null);

  return (
    <div className="wrapper">
      <div className="border">
        <div className="display">
          <p>{0 + count} + 8 </p>
        </div>
        <div className="button-wrapper">
          <button className="button9" onClick={() => setCount(9)}>
            9
          </button>
          <button className="button8" onClick={() => setCount(8)}>
            8
          </button>
          <button className="button7" onClick={() => setCount(7)}>
            7
          </button>
          <button className="button6" onClick={() => setCount(6)}>
            6
          </button>
          <button className="button5" onClick={() => setCount(5)}>
            5
          </button>
          <button className="button4" onClick={() => setCount(4)}>
            4
          </button>
          <button className="button3" onClick={() => setCount(3)}>
            3
          </button>
          <button className="button2" onClick={() => setCount(2)}>
            2
          </button>
          <button className="button1" onClick={() => setCount(1)}>
            1
          </button>
          <button className="button0" onClick={() => setCount(0)}>
            0
          </button>
          <button className="button10" value=".">
            .
          </button>
          <button className="button11" value="+">
            +
          </button>
          <button className="button12" value="-">
            -
          </button>
          <button className="button13" value="*">
            *
          </button>
          <button className="button14" value="/">
            /
          </button>
          <button className="button15" value="=">
            =
          </button>
          <button className="button16" value="C">
            C
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

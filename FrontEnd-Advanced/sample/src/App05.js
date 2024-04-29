// 페이지가 다시 그려지려면 상태가 관리되어야 한다.
// 상태 관리를 할 때에는 useState 함수를 사용해야 한다.
import { useState } from "react";
import "./App05.css";

function App05() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="heading">{count}</h1>
      <div className="div">
        <button className="btn" onClick={() => setCount(count - 1)}>
          -
        </button>
        <button className="btn" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </>
  );
}

export default App05;

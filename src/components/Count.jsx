// [문항 1]

import { useState } from "react";


function App() {
  const [count, setCount] = useState(1);
  const handlePuls = () => {
    setCount(count+1 <=10 ? count+1 : 1);
  }
  const handleRest = () => {
    setCount(1)
  }
  return (
    <>
    <div style={{fontSize: '5rem'}}>{count}</div>
    <button onClick={handlePuls}>증가시키기</button>
    <button onClick={handleRest}>리셋하기</button>
    </>
  );
}
export default App;
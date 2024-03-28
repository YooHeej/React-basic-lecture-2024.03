import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState([]);
  const handleClick = () => {
    setCount(count+1);
    setNumbers([...numbers, count+1]);  // 새로운 객체를 참조하는 방법
    
    //setNumbers(numbers.push(count+1)); -> 이렇게 사용하면 에러!!!!
    // numbers.push(count+1); => 가능하지만 권장X
    console.log(count);
  }
  return (
    <>
      <div style={{fontSize: '5rem'}}>{count}</div>
      <h3>{numbers}</h3>
      <button onClick={handleClick}>증가하기</button>
    </>
  );
}

export default App; // tag 이름 -> 대문자

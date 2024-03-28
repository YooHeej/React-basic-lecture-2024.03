import '../apps/App.css';

export default function Card() {
  const person = {name:'James', job: 'Programmer'}; // 자바스크립트 영역
  return (
    <div>
      <h1 style={{backgroundColor:"beige"}}>name: {person.name}</h1>
      <hr />
        <img src="https://picsum.photos/200/200?q=0" className="photo" />
        <br />
        <h3>job: {person.job}</h3>
    </div>
  );
}
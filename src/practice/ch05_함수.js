const anony = function() {
 console.log('익명 함수');
}
function named() {
  console.log('선언적 함수');
}

anony(); named();

const arrow = () => {
  console.log('화살표 함수, 람다 함사');
}
arrow();
// 파라메터가 1개 있으면 () 생략 가능
const param1 = x => {
  console.log('x=' + x);
}
param1(5);

// 함수 내부의 실행문이 return 하나 밖에 없으면 '{ }' 와 'return' 생략할 수 있음
const add = (a, b) => a + b;
  console.log(`add(3, 4) = ${add(3, 4)}`);

  const fn = (name, count) => {
    // if (count == undefined)      -> level 1
    //   count = 0; 아래와 동일
    // count = count ? count : 0; 아래와 동일   -> level 2
    count = count || 0;     //  -> level 3
    console.log(`${name}: ${count}`);
  }
  fn('apple', 10);
  fn('banana');

  function call3Times(callback) {
    for (let i=0; i<3; i++)
      callback();
  }
  // call3Times(named);      // call3Times(anony);
  // call3Times(function() {
  //   console.log('콜백 함수로 직접 익명 함수를 생성');
  //  });
  call3Times(()=>{
    console.log('콜백 함수로 화살표 함수를 생성');
  });
  setTimeout(() => {
    console.log('1000ms 이 후에 실행됩니다.');
  }, 1000);
  const si = setInterval(() => {
    console.log('0.5초 마다 실행');
  }, 500);
setTimeout(() => {      // 3.1초 후에 반복실행되는 코드를 없앰
  clearInterval(si);
  console.log('3.1초 후 에 반복 실행되는 코드를 없앤다.')
}, 3100);
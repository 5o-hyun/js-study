var x = 1;
(function result() {
  let y = 2;
  function inner() {
    let z = 3;
    console.log(y); // 2 함수 내부에서 외부호출 가능
  }
  inner();
  //   console.log(z); // error 함수 외부에서 내부로 호출 불가능
})();
console.log(x); // 1
// console.log(y); // error

const a = "global";
function outer() {
  const b = "outer";
  function inner() {
    const c = "inner";
    console.log(c); // inner
    console.log(a); // global
  }
  inner();
}
outer();

(function () {
  const a = "즉시실행함수의 지역변수";
  console.log(a); // 즉시실행함수의 지역변수
})();

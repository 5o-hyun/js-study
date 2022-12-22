const arr = [1, 2, 3];
console.log(...arr); // 1 2 3

// 1. 함수 호출문의 인수목록에서 사용
console.log(Math.max(...arr)); // 3

// 2. 배열리터럴 내부에서 사용
// 2-1. 배열합치기
console.log([...[1, 2], ...[3, 4]]); // [1 2 3 4]
// 2-2. 배열요소 추가 혹은 삭제
arr.splice(1, 0, 10); // [1 10 2 3]
console.log(arr);

function plus(number) {
  // * splice는 원하는값이아닌 return값이 나오기때문에 console.log(arr.splice(1,0,10));을 한번에쓰면 return값이 나온다. 따라서 따로 써야함
  number + 1;
  return "plus success";
}
console.log(plus(1));
// 2-3. 배열복사
const copy = [...arr]; // [1 10 2 3]
console.log(copy);
// 2-4. 이터러블 배열로 반환 (arguments객체는 이터러블이면서 유사배열이다.)
function sum() {
  return [...arguments].reduce((pre, cur) => pre + cur, 0);
}
console.log(sum(1, 2, 3));

// 3. 객체리터럴에서 사용
const obj = { x: 1, y: 2 };
const arrCopy = { ...obj };
console.log(arrCopy);
console.log({ ...arrCopy, ...{ y: 100 } }); // 객체프로퍼티변경
console.log({ ...arrCopy, ...{ z: 3 } }); // 객체병합

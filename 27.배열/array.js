const arr = ["apple", "orange", "banana"];

// console.log(arr[0]); // apple
// console.log(arr[1]); // orange
// console.log(arr[2]); // banana
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log(arr.length); // 3
console.log(typeof arr); // object

const arr2 = [1, 2, , 4]; // 1, 2, empty, 4
const arr3 = new Array(10); // empty,empty, ... , empty
const arr4 = Array.of(1, 2, 3); // [1,2,3]

console.log("* 희소배열 : " + arr2, "갯수 : " + arr2.length);
console.log("* es6 빈배열생성 : " + arr3, "갯수 : " + arr3.length);
console.log("* 전달된인수를 요소로갖는배열 : " + arr4, "갯수 : " + arr4.length);

const array = [1, 2, 3, 2];

// 배열인지아닌지
console.log(Array.isArray(array));

// 요소가있냐없냐
console.log(array.indexOf(2));
console.log(array.indexOf(4));
console.log(array.indexOf(2, 2));
// 요소가있냐없냐 -> es7
if (!array.includes(5)) {
  array.push(5); // push : 끝에 추가
}
array.pop(5); // pop : 끝이 삭제
array.unshift(5); // unshift : 앞에 추가
array.shift(5); // shift : 앞에 삭제
console.log(array);

const arrayElem = [0, 1];
arrayElem.splice(0, 1);
console.log(array.concat(arrayElem)); // concat : 마지막요소에 인수로전달될값을 배열로추가
console.log(array.slice(array)); // slice : 배열을 잘라서 새로운배열반환 (얕은복사)
console.log(array.join(".")); // join : 배열을 문자열로반환
console.log(array.flat());

const arrayElem2 = [[999, 999], 2];
console.log(arrayElem2.flat()); // flat : 배열 평탄화

// 배열고차함수

console.log(arr.sort()); // sort : 오름차순정렬
const arr0 = [1, 40, 99, 20, 39];
arr0.sort((a, b) => a - b); // 숫자 오름차순
arr0.sort((a, b) => b - a); // 숫자 내름차순
console.log(arr0);

const numbers = [1, 2, 3];
const result = [];
numbers.forEach((item) => result.push(item ** 2)); // 1 4 9 => forEach : for대체
console.log(result);

const mapResult = result.map((item) => item + 1); // 2 5 10 => map : for대체인데 새로운배열반환
console.log(mapResult);

const odd = result.filter((item) => item % 2); // 1 9 => filter : 콜백함수반환값이 true인요소를 새로운배렬로반환
console.log(odd);

const num = [1, 2, 3];
const reduceResult = num.reduce((a, b) => a + b, 0); // 6 => reduce : 인수로전달받은 콜백함수를 반복호출하고, 콜백함수의 반환값을 다음순회시 콜백함수의 첫번째인수로 전달하면서 콜백함수를 호출해 하나의 결과값을 만들어반환
console.log(reduceResult);

const personGroup = [
  { name: "소현", age: "17" },
  { name: "나영", age: "10" },
  { name: "미지", age: "8" },
];
console.log(personGroup.some((person) => person.age > 10)); // some : 하나라도 true리면 true
console.log(personGroup.some((person) => person.age > 20));
console.log(personGroup.every((person) => person.age > 1)); // every : 모두 true면 true
console.log(personGroup.every((person) => person.age > 10));
console.log(personGroup.find((person) => person.age < 15)); // find : true인 첫번째요소를 반환
console.log(personGroup.findIndex((person) => person.age < 15)); // findIndex : true인 첫번째요소의 인덱스를 반환

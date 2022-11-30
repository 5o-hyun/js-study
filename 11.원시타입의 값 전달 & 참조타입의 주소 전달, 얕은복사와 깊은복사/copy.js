// 원시타입
const a = 1; // => 값 그 자체
// 객체타입
const b = { b: 1 }; // => 객체의 메모리주소 값을 가지고 참조하므로 참조타입. * {} : 메모리주소
b.b = 20;
console.log(b); // { b : 20 };

const obj = {
  a: 1,
  b: 2,
  c: {
    x: 1,
    y: 2,
    z: 6,
  },
};
console.log(obj);
// 얕은복사 1.spread operator
const result0 = {
  ...obj,
};
result0.c.z = 8;
console.log(result0);

const result1 = {
  // => 깊은복사. spread도 depth1개까지만 얕은복사고, 그 이상일때는 깊은복사가된다
  ...obj,
  c: 3,
};
result1.c.z = 8;
console.log(result1);

// 얕은복사 2. Object.assign()
const result2 = Object.assign(obj);
console.log(result2);

console.log(obj, result0, result1, result2);
/*

[obj, result0, result2] => 얕은복사로 하나만바꿔도 모두 영향을받음
a:1,b:2,c:8

[result1] => 깊은복사로 영향을받지않음
a:1,b:2,c:3

*/

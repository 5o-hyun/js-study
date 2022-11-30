// import { cloneDeep } from "lodash";

// 원시타입
const a = 1; // => 값 그 자체
// 객체타입
const b = { b: 1 }; // => 객체의 메모리주소 값을 가지고 참조하므로 참조타입. * {} : 메모리주소
b.b = 20;
// console.log(b); // { b : 20 };

/* ------------------------------------------------------------ */

const obj = {
  a: 1,
  b: 2,
  c: {
    x: 1,
    y: 2,
    z: 6,
  },
};

console.log("obj", obj);
// 얕은복사 1.spread operator
const result0 = {
  ...obj,
};
console.log("1. spread", result0);

const result1 = {
  // => 깊은복사. spread도 depth1개까지만 얕은복사고, 그 이상일때는 깊은복사가된다
  ...obj,
  c: 3,
};
console.log("1. spread deep", result1);

// 얕은복사 2. Object.assign()
const result2 = Object.assign(obj);
console.log("2. Object.assign", result2);

/*

[obj, result0, result2] => 얕은복사로 하나만바꿔도 모두 영향을받음
a:1,b:2,c:8

[result1] => 깊은복사로 영향을받지않음
a:1,b:2,c:3

*/

// 얕은복사 3. slice
arr = [1, 2, obj];
const result3 = arr.slice(0);
console.log("3. array.slice", result3);

/* ------------------------------------------------------------ */

// 깊은복사 1. JSON.stringify,JSON.parse
const result4 = JSON.parse(JSON.stringify(obj));
console.log("4. deepCopy", result4);
// JSON.stringify => 자바스크립트값을 문자열로 변환
// JSON.parse => 자바스크립트 문자열을 객체로 변환

// 깊은복사 2.lodash library cloneDeep();
/* cloneDeep()을 쓸때는 자바스크립트 맨 위에
  ' import { cloneDeep, result } from 'lodash'; ' 를 넣어야 작동한다. */
// const result5 = cloneDeep(obj);
// console.log(result5);

result0.c.z = 8;

/* ------------------------------------------------------------ */

const deepCopy = (obj) => {
  let copyObj = {};
  Object.keys(obj).map((value) => {
    if (typeof obj[value] === "object") {
      copyObj[value] = deepCopy(obj[value]);
    }
    copyObj[value] = obj[value];
  });
  return copyObj;
};
const deepCopyObj = deepCopy(obj);
console.log(deepCopyObj);

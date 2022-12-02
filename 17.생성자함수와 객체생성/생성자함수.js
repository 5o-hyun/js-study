const 소현 = {
  name: "소현",
  age: "27",
};
const 나영 = {
  name: "나영",
  age: "29",
};
console.log(소현); // {name:'소현', age:'27'}
console.log(나영); // {name:'나영', age:'29'}

// 생성자함수생성
function User(name, age) {
  this.name = name;
  this.age = age;
}
// 객체생성
const 소현인스턴스 = new User("소현", "27");
const 나영인스턴스 = new User("나영", "29");
// 출력
console.log(소현인스턴스); // {name:'소현', age:'27'}
console.log(나영인스턴스); // {name:'나영', age:'29'}

/* 빌트인생성자함수 */
const strObjNew = new String("hello");
const strObj = String("hello");
console.log(strObjNew); // String {0: "h", 1: "e", 2: "l", 3: "l", 4: "o"…}
console.log(strObj); // hello

const numObjNew = new Number(123);
const numObj = Number(123);
console.log(numObjNew); // Number {123}
console.log(numObj); // 123

const boolObjNew = new Boolean(true);
const boolObj = Boolean(true);
console.log(boolObjNew); // Boolean {true}
console.log(boolObj); // true

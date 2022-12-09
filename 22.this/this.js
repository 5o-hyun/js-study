// 1. 기본바인딩 : window
var color = "red";
function foo() {
  console.log(this.color);
}
foo();

// 2. 암시적바인딩 : 객체 ( 객체의 프로퍼티로 접근해실행 )
const obj = {
  color: "orange",
  foo: foo,
};
function foo() {
  console.log(this.color);
}
obj.foo();

// 3. 명시적바인딩 : call, apply, bind로 명시적으로 어디에 바인딩할것인지 정해준다.
const obj2 = {
  color: "lemon",
};
function foo() {
  console.log(this.color);
}
// obj.foo(); <= 위의것과 비교
foo.call(obj2);

// 4. new 연산자 바인딩 : class나 생성자함수로 인스턴스를 만들때 this가 인스턴스에 바인딩
function PenColor(color) {
  this.color = color;
  this.pick = function () {
    console.log(this.color);
  };
}
const pen = new PenColor("green");
pen.pick();

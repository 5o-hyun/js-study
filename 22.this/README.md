자바스크립트의 컨텍스트 바인딩 this의 4가지 동작방식을 알아보자

- 1. 기본바인딩
- 2. 암시적바인딩
- 3. 명시적바인딩
- 4. new연산자바인딩

# 1. 기본바인딩

function키워드를 쓴 함수 = 그냥 함수를 호출할떄<br/>

**전역객체(window)에 바인딩**이 된다. 단, strict mode에서는 에러발생

```
// 1. 기본바인딩 : window
var color = "red";
function foo() {
  console.log(this.color);
}
foo(); // red
```

# 2. 암시적바인딩

함수호출시 객체의 프로퍼티로 접근해 실행하는 암시적바인딩<br/>
객체 obj의 프로퍼티 foo에 foo라는 함수의 참조를 할당하고, 객체를통해 foo를 호출하면 객체에 바인딩

```
// 2. 암시적바인딩 : 객체 ( 객체의 프로퍼티로 접근해실행 )
const obj = {
  color: "orange",
  foo: foo,
};
function foo() {
  console.log(this.color);
}
obj.foo(); // orange
```

# 3. 명시적바인딩

call, apply, bind를 사용하여 **명시적으로 this가 어디에 바인딩할것인지** 정해준다.<br/>

- `call`, `apply` : obj2를 바인딩해서 호출해라
- `bind` : 새로운 함수를 만들어서 호출해라

```
// 3. 명시적바인딩 : call, apply, bind로 명시적으로 어디에 바인딩할것인지 정해준다.
const obj2 = {
  color: "lemon",
};
function foo() {
  console.log(this.color);
}
// obj.foo(); <= 위의것과 비교
foo.call(obj2);
```

# 4. new 연산자 바인딩

class나 생성자함수로 인스턴스를 만들때 this가 인스턴스에 바인딩한다.

```
function PenColor(color) {
  this.color = color;
  this.pick = function () {
    console.log(this.color);
  };
}
const pen = new PenColor("green");
pen.pick(); // green
```

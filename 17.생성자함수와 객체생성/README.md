# 객체리터럴에 의한 객체생성의 문제점

객체리터럴에 의한 객체생성은 한번에 하나의 객체만 생성한다.<br/>
따라서 **동일한 프로퍼티를 갖는 객체를 여러개 생성 해야하는경우 생성자함수를 사용**하면 편하다.<br/>

```
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
```

# 생성자함수

`new`연산자와 함께 호출하여 객체(인스턴스)를 생성하는 함수

# 생성자함수에의한 객체생성시 장점

생성자함수는 객체(인스턴스)를 생성하기위한 템플릿처럼 사용하여 프로퍼티 구조가 동일한 객체를 여러개 간편하게 생성할수있다.

```
// 생성자함수생성
function User(name, age) {
  this.name = name;
  this.age = age;
}
// 객체생성
const 소현인스턴스 = new User("소현", "27");
const 나영인스턴스 = new User("나영", "29");
// 출력
console.log(소현인스턴스);// {name:'소현', age:'27'}
console.log(나영인스턴스);// {name:'나영', age:'29'}
```

## this

객체 자신의 프로퍼티나 메소드를 참조하기위한 자기참조변수<br/>
this가 가리키는값은 함수호출방식에따라 동적으로 결정된다.<br/>
<img src="https://images.velog.io/images/5o_hyun/post/c528be34-ac9f-4afd-b0c8-6df08d175c56/image.png">

# 생성자함수 특징

1. 화살표함수는 사용할수없다 (반드시 `function`사용)<br/>
2. `PascalCase`로 네이밍한다.<br/>
3. `매개변수를 사용`한다. (age등..)<br/>
4. `this` 사용시 `자기자신`을 가리킨다.<br/>
5. `new`키워드를 반드시 붙여야한다.<br/>

# 빌트인 생성자함수

자바스크립트는 사용자정의 생성자함수 이외에도 `String`,`Number`,`Boolean`,`Function`, `Array`, `Date`, `RegExp`, `Promise`등의 빌트인 생성자함수를 제공한다.<br/>
대부분은 **new연산자와 함께 호출**되었는지 확인한후 **객체에 넣어 반환**한다.<br/>
단,`String`,`Number`,`Boolean`은 **new연산자없이 호출**시 문자열,숫자,불리언**값**을 반환한다.<br/>

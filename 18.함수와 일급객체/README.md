# 일급객체

## 1. 무명의 리터럴로 생성할수있다.

## 2. 변수에 저장할수있다.

## 3. 함수의 매개변수에 전달할수있다. => 콜백함수를 쓸수있다.

## 4. 함수의 반환값으로 사용할 수 있다. => 고차함수형태를 띌수있다.

다음과 같은 조건을 만족하는 객체는 일급객체다.<br/>
따라서 자바스크립트의 **함수는 일급객체다.**<br/>
즉, **함수가 일급객체이기때문에 할수있는것은 콜백함수와 고차함수를 사용할수있다.**<br/>

```
// 1. 함수는 무명의 리터럴로 생성할수있다.
const increase = function (num) {
  return ++num;
};
const decrease = function (num) {
  return +--num;
};

console.log(increase(1)); // 2

// 2. 함수는 변수에 저장할수있다.
const calculate = { increase, decrease };
console.log(calculate);

// 3. 함수의 매개변수에 전달할수있다.
// 4. 함수의 반환값으로 사용할수있다.
function counter(calculate) {
  let num = 0;

  return function () {
    num = calculate(num);
    return num;
  };
}
```

# 함수 객체의 프로퍼티

함수도 객체다. 따라서 함수도 프로퍼티를 갖는다.<br/>
`console.dir` : 함수객체의 데이터를 볼수있다.<br/>
`Object.getOwnPropertyDescriptors` : 함수의 모든 프로퍼티의 어트리뷰트를 볼수있다.<br/>

```
function square (number) {
  return number * number;
}

console.dir(square);

console.log(Object.getOwnPropertyDescriptors(square));
// {length: {…}, name: {…}, arguments: {…}, caller: {…}, prototype: {…}}
```

<img src="https://velog.velcdn.com/images%2F5o_hyun%2Fpost%2F51976686-9edf-47de-9118-0629249c58b3%2Fimage.png"><br/>
^ console.dir로 확인한모습<br/>
arguments, caller, length, name, prototype 프로퍼티는 모든 함수 객체의 데이터 프로퍼티다.<br/>

## 1. arguments 프로퍼티

함수객체의 arguments프로퍼티값은 arguments 객체다.<br/>
arguments 객체는 **순회가능한 배열형태**이지만 실제 배열이아닌 **유사배열객체**다.<br/>
유사배열객체는 배열이아니므로 **배열메서드 사용시 에러가 발생**한다.<br/>

현재 비표준이므로 사용을 권장하지않으며, **대신에 rest parameter를 쓴다.**<br/>

## 2. caller 프로퍼티

**함수 자기자신을 호출한 함수**를 가리키며 비표준이므로 사용하지말고 참고로만 알아두자.<br/>

## 3. length 프로퍼티

**매개변수의 갯수**를 가리킨다.<br/>
어쩌면 내가 코딩시 제일 많이 사용하고있는 프로퍼티<br/>

## 4. name 프로퍼티

**함수 이름**을 나타낸다.<br/>

```
const group = function foo (){};
console.log(group.name); // foo
```

## 5. prototype 프로퍼티

생성자함수로 호출할수있는 객체, 즉 constructor만이 소유하는 프로퍼티다.<br/>
일반객체와 생성자함수로 호출할수없는 non-constructor에는 prototype 프로퍼티가 없다.<br/>

```
// 함수 객체는 prototype 프로퍼티를 소유한다.
(function(){}).hasOwnProperty('prototype'); // true
// 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
({}).hasOwnProperty('prototype'); // false
```

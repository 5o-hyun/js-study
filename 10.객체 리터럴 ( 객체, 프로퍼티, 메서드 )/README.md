# 객체란?

자바스크립트의 기본타입(data type)은 객체다.<br/>
<img src="https://images.velog.io/images/5o_hyun/post/f2496946-827c-49ca-8fc8-ca837241622c/Untitled-1.jpg">

객체 : 프로퍼티의 집합<br/>
프로퍼티 : key(키) 와 value(값) 으로 구성<br/>
프로퍼티는 값이 함수일경우 일반함수와 구분하기위해 **메서드(method)** 라고부른다.<br/>

# 객체 프로퍼티 접근방법

## 1. dot notation 마침표표가법

마침표 프로퍼키 접근연산자 `.`를 사용<br/>

## 2. bracket notation 대괄호표기법

대괄호 프로퍼티 접근연산자 `[]`를 사용<br/>
문자열로 `''` 를 넣어야함<br/>

```
console.log(foo.a);
console.log(foo['a']);
```

# 프로퍼티

객체는 프로퍼티의 집합이고 프로퍼티는 키와 값으로 구성된다.

## 1. 프로퍼티의 특징

**1) 식별자 네이밍 규칙을 준수하는 프로퍼티 키 사용**<br/><br/>
**2) 이미 존재하는 프로퍼티키를 중복선언하면 먼저선언한 프로퍼티를 덮어쓴다.**<br/><br/>
**3) 객체에 존재하지 않는 프로퍼티에 접근하면 undefined를 반환**<br/><br/>
**4) var,function같은 예약어는 프로퍼티 선언시 사용을 권장하지않는다.**<br/><br/>

## 2. 프로퍼티 값 갱신 (변수재할당)

이미 존재하는 프로퍼티에 값을 할당하면 프로퍼티 값이 갱신된다.

```
var person = {
    name : 'kim'
}
person.name = 'lee';
console.log(person); // name : 'lee'
```

## 3. 프로퍼티 동적생성

존재하지않는 프로퍼티에 값을 할당해, 프로퍼티를 동적으로 생성할수있다.<br/>
(undefined라고 생각하고 값을 넣어주는것이 편하다.)<br/>

```
var person = {
    name : 'kim'
}
person.age = '26';
console.log(person); // name : 'kim', age : 26
```

## 4. 프로퍼티 축약, 메서드 축약

객체리터럴의 확장기능

```
// 프로퍼티 축약

var x = 1 , y = 2;

var obj = {              var obj = {
  x : x ,           =      x ,
  y : 3                    y : 3
}                        }
/*
x : x 는, x 표현식과 같다.
   ==> 변수 이름과 프로퍼티 키가 동일할 때 생략 할 수 있다.
*/

console.log(obj); // x : 1 , y : 3


// 메서드 축약
var obj = {                             var obj = {
  name : 'lee',                           name : 'lee',
  sayHi : function(){               =     sayHi(){
    console.log('hi! '+this.name);           console.log('hi! '+this.name);
}                                       }

console.log(obj); // hi! lee
```

## 5. 프로퍼티 삭제

`delete`연산자는 객체의 프로퍼티를 삭제한다.<br/>
실무에서 잘 사용하지않는다.

```
var person = {
    name : 'kim'
    age : '26'
}
delete person.age;
console.log(person); // name : 'kim'
```

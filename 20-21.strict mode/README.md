# strict mode

## strict mode

strict mode(엄격모드)는 자바스크립트가 묵인했던 에러들의 애러 메세지를 발생시켜 더욱 엄격한 오류 검사를 적용해주는것이다.<br/>
<br/>

## strict mode 사용이유

개발자의 의도와 상관없이 암묵적전역 등은 나중에 오류를 발생시키는 원인이 될 가능성이크다. 따라서 반드시 var, let, const 를 사용해 변수를 선언하고 사용해야한다.<br/>
<br/>

strict mode는 자바스크립트의 문법을 좀더 엄격히 적용하여 **최적화 작업에 문제를 일으킬수있는 코드에 대해 명식적인 에러를 발생시킨다.**
<br/>
<br/>

## strict mode의 적용

`'use strict;'` 을 몸체의 선두에 추가하여 적용하는데,<br/>

**전역**에 적용하면 **스크립트단위로적용**된다.<br/>
**함수단위**로 적용하면 **일일히 함수마다 적용**된다.<br/>
<br/>

=> 따라서 strict mode는 **즉시실행한수로 감싼 스크립트 단위로 적용**하는것이 바람직하다.
<br/>

```
(function(){
    'use strict';
}());
```

## strict mode 가 발생시키는 에러

- 암묵적전역
- delete로 변수,함수,매개변수삭제
- 매개변수 이름의 중복
- with문사용

<br/>

# 빌트인객체

## 표준빌트인객체

자바스크립트는 40여개의 표준빌트인객체를 제공한다.<br/>
`String`,`Number`,`Boolean`,`Function`,`Array`,`Date` 는 생성자함수로 호출하여 인스턴스를 생성할수있다.<br/>

```
// 빌트인 쓰는것들 모음집
const arr = new Array(1,2,3); // [1,2,3]
const regExp = new RegExp(/ab+c/i); // /ab+c/i
const date = new Date(); // Mon Jan 10 2022 15:26:05 GMT+0900 (한국 표준시)
```

## 원시값과 래퍼객체

문자열,숫자,불리언등의 원시값이 있는데도 String, Number, Boolean 표준빌트인객체를 사용하는이유는 무엇일까?<br/>
<br/>
원시값은 객체가 아니므로 프로퍼티나 메서드를 가질수없음에도 원시값이 마치 객체처럼 동작한다.

```
const str = 'hi';

// 원시타입인 문자열이 래퍼객체인 string 인스턴스로 변환되어 동작
console.log(str.length); // 2
console.log(str.toUpperCase()); // HI

// 래퍼객체로 동작하고, 다시 원시값으로 되돌린다
console.log(typeof str); // string
```

원시값에대해 마치 객체처럼 마침표표기법(혹은대괄호표기법)으로 접근하면 자바스크립트 엔진이 일시적으로 원시값을 연관된 객체로 변환해준다.<br/>
이처럼 **문자열,숫자,불리언값에대해 객체처럼 접근하면 생성되는 임시객체를 래퍼객체**라고한다.<br/>
그 후 처리가 종료되면 가비지컬렉션의 대상이 되어 다시 원시값으로 되돌린다.<br/>
<br/>

## 전역객체

전역객체는 코드가 실행되기 이전단계에 자바스크립트엔진에의해 어떤 객체보다도 먼저 생성되는 특수한 객체이다.<br/>
어떤객체에도 속하지않는 **최상위객체**다.<br/>
<br/>

전역객체는 자바스크립트 환경에따라 지정하는 이름이 제각각인데,<br/>
**브라우저**환경에서는 **window**(또는 self , this)가 전역객체를 가리키고
**Node,js**에서는 **global**이 전역객체를 가리킨다.<br/>
<br/>

### 빌트인 전역함수

`isNaN` : 숫자인지 검사하는 함수. 숫자가아니면(NaN) true를 반환한다.<br/>
`parseFloat` : 문자열을 실수로 바꾸는 함수<br/>
`parseInt` : 문자열을 정수로 바꾸는 함수 <br/><br/>
`encodeURI(url)` : 인터넷 주소에서 사용하는 :, ;, /, =, ?, & 등을 제외하고 인코딩하는 함수<br/>
`decodeURI(url)` : encodeURI()로 인코딩한 문자열을 디코딩하는 함수<br/>
`encodeURIComponent(url)` : 모든 문자를 인코딩하는 함수<br/>
`decodeURIComponent(url)` : encodeURIComponent()로 인코딩한 문자열을 디코딩하는 함수<br/>
<br/>

- 인코딩 : 사람이 인지할수있는 데이터형태를 컴퓨터가 사용하는 0과1로 변환하는과정<br/>

=> 즉, **문자를 바이트형식으로 변환**
<br/>

- 디코딩 : 컴퓨터가 사용하는 0과1형태를 사람이 인지할수있는 데이터형태로 변환하는과정<br/>

=> 즉, **바이트형식을 문자로 변환**

```
const url = "https://www.codingfactory.net/?s=스크립트";

console.log(encodeURI(url)); // https://www.codingfactory.net/?s=%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8
console.log(decodeURI(url)); // https://www.codingfactory.net/?s=스크립트
console.log(encodeURIComponent(url)); // https%3A%2F%2Fwww.codingfactory.net%2F%3Fs%3D%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8
console.log(decodeURIComponent(url)); // https://www.codingfactory.net/?s=스크립트

```

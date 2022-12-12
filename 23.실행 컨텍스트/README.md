# 실행컨텍스트

실행문맥이다. **실행할 코드에 제공할 환경정보들을 모아놓은 객체**로서, 동일한 스코프에있는 코드들을 실행할때 필요한 환경정보를 모아 컨텍스트를 구성하고, 이를 콜 스택에 쌓아서 순서를 보장한다.<br/>

## 콜 스택

실행문맥은 스택이라는 구조로 관리되는데, 스택이란 데이터를 아래에서 위로 쌓아올려 마지막으로 추가한 데이터를 먼저 꺼내는 후입선출방식이다.

# 실행 가능한 코드

자바스크립트엔진은 실행가능한코드를 만나면 코드를 평가해 실행문맥으로 만든다.

- 전연코드 : 전역코드평가, 전역스코프를생성
- 함수코드 : 함수코드평가, 지역스코프를생성
- eval코드 : eval코드평가, strict mode에서 자신만의 독립적인 스코프를 생성
- 모듈코드 : 모듈코드평가, 모듈별로 독집적인 모듈스코프를생성

각 코드가 평가되면 해당하는 실행컨텍스트가 생성된다.

# 코드의 평가와 실행 

우리가 코드를 작성하면 자바스크립트엔진이 코드를 2가지과정, 즉 **평가**와 **실행** 과정으로 나누어 처리한다.<br/>

평가과정에서는, 실행컨텍스트를 생성하고 변수,함수등의 선언문만 먼저싱행하여 환경레코드에 등록한다.<br/>

평가과정이 끝나면 선언문을 제외한 소스코드가 순차적으로 실행되기 시작한다<br/>
즉 런타임이 실행된다.

```
var person = 'sohyun';
const outer = function(){
  var person2 = 'nayoung';
  const inner = function(){
    console.log(person);
    console.log(person2);
  }
  inner();
  console.log('print finish');
}
outer();
console.log('finish');

// sohyun
// nayoung
// print finish
// finish
```

<img src="https://velog.velcdn.com/images%2F5o_hyun%2Fpost%2Fd3b8b099-bcda-47d3-af9b-4ba878717a8c%2Fimage.png"/>

전역 실행 컨텍스트가 생성되고 환경 레코드에 변수 person 과 함수 outer 가 기록된다.<br/>
outer( ); 로 outer함수를 호출하면 outer 실행 컨텍스트가 생성되고 환경 레코드에 변수 person2 와 함수 inner 가 기록된다.<br/>
inner( ); 로 inner함수를 호출하면 inner 실행 컨텍스트가 생성되고 console.log 를 실행한다.<br/>
( 따라서 함수를 호출할 때 해당 함수 실행 컨텍스트가 생성된다. ex) outer(); 시 outer 실행 컨텍스트가 생김 )<br/>
<br/>
외부 렉시컬 환경 참조에는 전역 환경의 참조가 들어있다.<br/>
inner 함수가 호출이 되면 외부 렉시컬 환경 참조에는 outer 실핸 컨텍스트의 렉시컬 환경 참조가 들어있다.<br/>

<img src="https://velog.velcdn.com/images%2F5o_hyun%2Fpost%2Fcdd54981-38f2-4f51-bacf-5e7c73cea384%2Fimage.png"/>


외부 렉시컬 환경참조라는 컴포넌트를 이용해서 전역컨텍스트까지 계속 타고 올라가는 체인모양의 형태가 형성되는데 이것을 **스코프 체인**이라고부른다. <br/>

**스코프 체인이 있기때문에 내부함수에서 외부함수의 변수에 접근할수있는것이다.**

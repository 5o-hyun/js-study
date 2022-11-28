단축평가? : 표현식을 평가하는도중 평가결과가 확정된경우, 나머지 평가과정을 생략한다.

# 1. 논리연산자 를사용한단축평가
`||` : 논리합 ( 하나라도 )
`&&` : 논리곱 ( 둘다 )
```
'cat' || 'dog' // cat
false || 'dog' // dog
'cat' || false // cat

'cat' && 'dog' // dog
false && 'dog' // false
'cat' && false // false
```

# 2. 옵셔널체이닝연산자
`?.`좌항의 피연산자가 null 또는 undefined 인경우  **undefined를 반환**하고, **그렇지않으면 우항**의 프로퍼티참조를 이어간다. <br/>
<br/>
a `?.` b 의 평가는 다음과같다.<br/>
- a 가 null or undefined인 경우 undefined
- 그 외의 경우는 b

> 왜 사용하는걸까? <br/>
개발하다가 객체의 property값이 없어서 에러가 발생하는경우가 있다.<br/>
객체는 property로 이루어져서 property의 key값으로 접근하는데 `?.`형태를 가진 옵셔널체이닝은 객체에 key(속성) 이 존재하지않아도 애러를 발생시키지않고 접근할수있다.<br/>
따라서 **데이터가 존재하는지 알기 힘들떄 사용할 수 있는 방법**이다.<br/>

```
var obj = undefined;
console.log(obj.data); // error
console.log(obj?.data); // 좌항인 obj가 undefined이므로 undefined를 반환

var obj = [data : 'test'];
console.log(obj?.data); // test
```

# 3. null병합연산자
`??`   좌항의 피연산자가 null 또는 undefined 인경우  **우항의 피연산자를 반환**하고,  **그렇지않으면 좌항**의 피연산자를 반환한다.<br/>
실무에서 은근히 사용된다.<br/>
<br/>
a `??` b 의 평가결과는 다음과같다.
- a 가 null 또는 undefined인경우 b
- 그 외의 경우는 a

```
var foo = null ?? 'cat';
console.log(foo); // cat

var foo = 'dog' ?? 'cat';
console.log(foo); // dog
```

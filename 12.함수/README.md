# 함수란?
일련의 과정을 '문'으로 구현하고 코드 블록으로 감싸서 하나의 실행 단위로 정의한것<br/>

# 함수를 사용하는 이유
- 코드의 재사용<br/>
- 유지보수의 편의성<br/>
- 가독성 향상<br/>

# 함수의 형태

## 1. 함수선언문
매개변수 ( parameter ) : 함수내부로 입력을 전달받는 변수<br/>
입력 : 인수(argument)<br/>
출력 : 반환값(return value)<br/>
```
function 식별자 ( 매개변수 ) {
    함수 body
    return 반환값;
}
```

## 2. 화살표함수
function 키워드 대신 화살표 `=>` 를 사용해 간략하게 함수선언<br/>
```
const foo = ( 매개변수 ) => {
  함수 body
};
```

## 3. 익명함수
함수명 대신 변수명에 함수 코드를 저장하는 구현 방식<br/>
익명 함수는 호출 시 변수명을 함수명처럼 사용<br/>
```
var 변수명 = function( 매개변수 ){
  실행문;
};
변수명();
```

## 4. 즉시실행함수
함수 정의와 동시에 즉시 호출되는 함수<br/>
단, 한번만 호출되어 다시 호출할수없다.<br/>
```
(function(){
  console.log("즉시실행");
})
```

## 5. 재귀함수
함수가 자기자신을 호출하는 함수<br/>
* 재귀호출시 계속 무한 돌기때문에 탈출조건이 필요하다.<br/>
```
function factorial(num) {
  if (num < 1) {
    return 1;
  }
  return num * factorial(num - 1);
}
console.log(factorial(4)); // 4x3x2x1 = 24
```

## 6. 콜백함수
매개변수를 함수로 전달받아, 그 함수의 내부에서 실행하는 함수<br/>
인자값이 함수일때<br/>
```
const add3 = (numbers) => {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
};

const calculate = (cb, numbers, operateType) => {
  if (operateType == "add3") {
    const result = cb(numbers);
    return result;
  } else if (operateType == "multiple") {
    return "multiple";
  }
  return "Wrong operate result.";
};

const getOperator = () => {
  return "add3";
};

const calculatingResult = calculate(add3, [1, 2, 3], getOperator());
console.log(calculatingResult); // 1+2+3 = 6
```

디스트럽처링할당은 비구조화할당, 구조분해할당 이라고도 한다. <br/>
쉽게 말하면 구조를 뿌셔서 새로 할당을 하는것이다. <br/>

# 1. 배열 디스트럭처링할당

```javascript
// ES5
var arr = [1, 2, 3];

var one = arr[0];
var two = arr[1];
var three = arr[2];

// ES6
const arr = [1, 2, 3];

const [one, two, three] = arr;
```

# 2. 객체 디스트럭처링할당

```javascript
const obj = {
  a: 1,
  b: 2,
  c: 3,
};
const [a, b, c] = obj; // 순서는 상관없다.
console.log(b); // 2
```

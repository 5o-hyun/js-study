ES6문법에서 도입된 스프레드문법 {...}은 하나로 뭉쳐있는 여러값들의 집합을 펼쳐서 (spread) 개별적인 값들의 목록으로 만든다.<br/>
스프레드문법의 결과는 값이아니라 값들의 목록이다. 따라서 변수에 할당할수없다.<br/>
순회할 수 있는 이터러블에 한정하여 쓸수있다. Array,String,Map,Set,arguments등...<br/>

```javascript
const arr = [1, 2, 3];
console.log(...arr); // 1 2 3
```

# 1. 함수 호출문의 인수 목록에서 사용하는 경우

앞서 공부헸던 `Math.max`는 가장 큰 수를 뽑아내는 메서드다.<br/>
스프레드는 값이아니라 값들의 목록이기때문에 그냥 ...arr을 쓰면 에러가 뜬다.<br/>
이를 해결하기위해 배열을 펼쳐 요소들을 개별적인 값들의 목록으로 만든후 `Math.max`의 인수로 전달해야한다.<br/>

```javascript
console.log(Math.max(...arr)); // 3
```

# 2. 배열리터럴에서 사용하는경우

## 2-1. 배열을 합칠때 concat

ES5에는 2개의 배열을 1개로 합칠떄 `concat`메서드를 사용했다.

```javascript
const arrES5 = [1, 2].concat([3, 4]);
const arrSpread = [...[1, 2], ...[3, 4]];
```

## 2-2. 배열에 요소 추가/삭제시 splice

ES5에서는 어떤 배열에 다른 배열의 요소를 추가하거나 삭제하려면 `splice`메서드를 사용했는데, 이때 배열자체가 추가되기때문에 해제하고 넣어야했다.

```javascript
const a = [1, 2];
const b = [3, 4];
a.splice(1, 0, b); // [1,[2,3],4]
a.splice(1, 0, ...b); // [1,2,3,4]
```

## 2-3. 배열복사 slice

ES5에서 배열을 복사할 때 `slice`메서드를 사용했다.

```javascript
const arr = [1, 2, 3];
const arrES5 = arr.slice();
const arrSpread = [...arr];
```

## 4. 이터러블 배열로 반환

spread문법을 사용하면 간편하게 이터러블 배열로 반환할수있다.<br/>
arguments객체는 이터러블이면서 유사배열이다.<br/>

```javascript
function sum() {
  return [...arguments].reduce((pre, cur) => pre + cur, 0);
}
sum(1, 2, 3); // 6
```

# 3. 객체리터럴에서 사용하는경우

앞에서 리터럴에 ... 붙이는게아니가, 변수명에 스프레드연산자를 사용하는경우 얕은복사가된다.

```javascript
const obj = { x: 1, y: 2 };
const copy = { ...obj };
console.log(copy);
console.log({ ...copy, ...{ y: 100 } }); // 객체프로퍼티변경
console.log({ ...copy, ...{ z: 3 } }); // 객체병합
```

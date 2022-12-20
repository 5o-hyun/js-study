# String

`indexOf` : 인자가 몇번째에있는 인덱스인지<br/>
`includes` : 문자열이 있으면 true 없으면 false<br/>
`startsWith` : 전달받은 문자열로 시작하는지<br/>
`charAt` : 해당 인덱스에 있는 문자열 반환<br/>
`substring` : 첫번째 인수로 전달받은 인덱스의 문자부터, 두번째 인수로 전달받은 인덱스의 문자까지 반환<br/>
`slice` : substring과 동일하게 동작하지만 slice는 음수인 인수를 전달할수있다.<br/>
`toUpperCase` : 대문자로 바꿈<br/>
`toLowerCase` : 소문자로 바꿈<br/>
`trim` : 공백,띄어쓰기 없애줌 => 주로 검색창 등에 사용<br/>
`replace` : 앞에거를 뒤에거로 바꿔줌<br/>
`split` : 넘겨주는 인자를 기준으로 잘라서 배열로 반환<br/>

```javascript
const str = "hello everyone";
console.log(str.indexOf("l")); // 몇번째에 있는 인덱스인지
console.log(str.includes("l")); // 문자열이 있으면 true 없으면 false
console.log(str.startsWith("l")); // 전달받은 문자열로 시작하는지
console.log(str.charAt(1)); // 해당 인덱스에 있는 문자열 반환
console.log(str.substring(1, 4)); // 첫번째 인수로 전달받은 인덱스의 문자부터, 두번째 인수로 전달받은 인덱스의 문자까지 반환
console.log(str.slice(-3)); // substring과 동일하게 동작하지만 slice는 음수인 인수를 전달할수있다.
console.log(str.toUpperCase()); // 대문자로바꿈
console.log(str.toLowerCase()); // 소문자로바꿈
console.log(str.trim()); // 공백,띄어쓰기 없애줌 => 주로 검색창 등에 사용
console.log(str.replace("everyone", "sohyun")); // 앞에거를 뒤에거로 바꿔줌
console.log(str.split("")); // 넘겨주는 인자를 기준으로 잘라서 배열로 반환
```

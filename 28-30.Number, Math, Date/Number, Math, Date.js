// 1. Number
console.log(Number("0")); // 0
console.log(Number(true)); // true 1 false 0
console.log(Number("소현")); // NaN

// 숫자를 반올림하여 문자열로 반환
console.log(Number(12345.6789).toFixed()); // 12346
console.log(Number(12345.6789).toFixed(2)); // 12345.68 소수점2자리까지유효

// 숫자를 문자열로 반환
console.log(Number(10).toString()); // 10 ,기본10진수
console.log(Number(10).toString(2)); // 1010 , 2진수

// 2. Math
console.log(Math.round(1.4)); // 0.5기준 반올림
console.log(Math.floor(1.6)); // 무조건 정수
console.log(Math.sqrt(9)); // 제곱근반환

const random = Math.floor(Math.random() * 10 + 1); // 랜덤숫자반환
console.log(random);

console.log(Math.pow(2, 0)); // 거듭제곱반환
console.log(2 ** 0);

console.log(Math.max(1, 2, 3)); // 가장 큰 수 반환
console.log(Math.min(1, 2, 3)); // 가장 작은 수 반환

// 3. Date
console.log(Date.UTC(1970, 6, 2));
var today = new Date("2022/12/19/12:30");
console.log(today.getDay()); // 일0, 월1 ... 금5, 토6
console.log(today.toString()); // Mon Dec 19 2022 12:30:00 GMT+0900 (한국 표준시)
console.log(today.toLocaleTimeString()); // 오후 12:30:00
console.log(today.toLocaleTimeString("en-US")); // 12:30:00 PM
console.log(today.toLocaleTimeString("ja-JP")); // 12:30:00

// 함수형태
// 1. 함수선언문
function add(x, y) {
  return x + y;
}
console.log(add(2, 5));

// 2. 화살표함수
const add2 = (x, y) => x + y;
console.log(add2(2, 5));

// 3. 익명함수
const hello = function () {
  console.log("hello");
};
hello();

// 4. 즉시실행함수
(function () {
  console.log("즉시실행");
})();

// 5. 재귀함수
function factorial(num) {
  if (num < 1) {
    return 1;
  }
  return num * factorial(num - 1);
}
console.log(factorial(4));

// 6. 콜백함수
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
console.log(calculatingResult);

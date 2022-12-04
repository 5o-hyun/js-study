/*
  1. 사칙연산이 가능한 계산기 함수를 만들어주세요.
  input-example: '*', 10, 2
  output-example: 20
*/
function calculate(operate, num1, num2) {
  let result = "";
  if (operate === "+") {
    result = num1 + num2;
  } else if (operate === "-") {
    result = num1 > num2 ? num1 - num2 : num2 - num1;
  } else if (operate === "*") {
    result = num1 * num2;
  } else if (operate === "/") {
    result = num1 > num2 ? num1 / num2 : num2 / num1;
  } else {
    result = "계산불가";
  }
  console.log(result);
}
calculate("/", 2, 10);

/*
    2. 아래의 배열을 input으로 하고 해당 배열에서 홀수의 합을 반환하는 함수를 만들어보세요
    배열 메소드 사용 금지!
    input: [1, 2, 3, 5, 9, 12];
    output: 18
  */

arr = [1, 2, 3, 5, 9, 12];

function even(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(even(arr));

/*
    4. 모든 인자 값의 합을 구하는 함수를 만들어 주세요
    단, 인자의 개수는 항상 다릅니다.
    example: foo(1, 2, 3, 4, 5); => 15
    foo(2, 3); => 5
  */
function foo() {
  let sum = 0;
  for (let i = 0; i < arguments[i]; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}
foo(1, 2, 3, 4, 5);

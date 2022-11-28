/*
    if ... else 문은 반드시 불리언값으로 평가되는반면,
    switch문은 다양한상황(case)에따하 실행할 코드블록을 결정할때 사용한다.
    
    => 따라서 조건문에서 비교할값이 많은경우 switch문을 사용하면 가독성을 높일수있다.
*/

// 1. default 없는 경우
function caseInSwitch1(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return console.log(answer);
}
caseInSwitch1(1); // alpha
caseInSwitch1(5); // 빈값

// 2. default 있는 경우
function caseInSwitch2(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    default:
      answer = "no value";
      break;
  }
  return console.log(answer);
}

caseInSwitch2(1); // alpha
caseInSwitch2(5); // no value

// 3. 여러개의 조건이 같은 값을 공유하는 경우
function sameValueSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "high";
      break;
  }
  return console.log(answer);
}
sameValueSwitch(1); // low
sameValueSwitch(4); // mid
sameValueSwitch(5); // mid

// 4. 조건이 많은경우 if..else대신 switch를 사용하자.

const val = 42; // banana
if (val == 1) {
  console.log("apple");
} else if (val == 42) {
  console.log("banana");
} else if (val == 88) {
  console.log("lemon");
}

function manyValueSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "apple";
      break;
    case 42:
      answer = "banana";
      break;
    case 88:
      answer = "lemon";
      break;
  }
  return console.log(answer);
}

manyValueSwitch(88); // lemon

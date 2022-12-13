function makeCounter() {
  let count = 0;

  return () => {
    return count++;
  };
}
const counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());

/* 

클로저는 언제나 함수를 리턴하는것은아니다. return없이도 클로저가 발생하는경우

지역변수를 참조하는 내부함수를 외부에 전달했기때문에 클로저는 맞지만,
"외부로 전달"이 항상 return을 의미하는것은 아니다.

*/
(function () {
  let count = 0;
  var btn = document.createElement("button");
  btn.innerText = "click";
  btn.addEventListener("click", function () {
    console.log(++count, "times clicked");
  });
  document.body.appendChild(btn);
})();

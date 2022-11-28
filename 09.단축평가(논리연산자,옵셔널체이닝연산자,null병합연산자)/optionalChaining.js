// ?. 는 "객체누락"으로 문제가 생기는것을 방지한다.
const data = [
  {
    name: "Thomas",
    like: {
      food: "banana",
      drink: "milk",
    },
  },
  {
    name: "James",
    like: {
      food: "pasta",
      drink: "coke",
    },
  },
  {
    name: "Kim",
    want: {
      food: "ramyeon",
      drink: "water",
    },
  },
];

// 1. 3번째객체에 like가 없어서 에러가 뜬다.
// console.log(data[i].like.food);

// 2. &&로 하나하나 하기엔 손가락 노동이 든다.
// for (var i = 0; i < data.length; i++) {
//   if (data[i].like && data[i].like.food) {
//     console.log(data[i].like?.food);
//   }
// }

// 3. 옵셔널체이닝연산자로 없는것은 undefined출력
for (var i = 0; i < data.length; i++) {
  console.log(data[i].like?.food);
}

// 예제
(0 || undefined) ?? "yejinh"; // yejinh

("0" && null) ?? "yejinh"; // yejinh

null ?? (undefined && 0); // undefined

null ?? undefined ?? 0; // 0

const obj = {
  name: "",
};

obj.name ?? 0; // " "

obj.name || 0; // 0

obj?.age ?? 0; // 0

(obj.name ?? 0) && null; // " "

obj.name || (0 ?? null); // 0

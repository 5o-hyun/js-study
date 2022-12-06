class Tteokbokki {
  constructor(sort, count, price) {
    this.sort = sort + "색 떡볶이";
    this.count = count;
    this.price = price;
  }
}
Tteokbokki.prototype.totalPrice = function () {
  console.log(this.sort + "의 가격은 " + this.price * this.count + "원");
};

const red = new Tteokbokki("red", "2", "3000");
const rose = new Tteokbokki("rose", "2", "4000");
const cream = new Tteokbokki("cream", "2", "5000");

red.totalPrice();
rose.totalPrice();
cream.totalPrice();

class Score {
  constructor(listen, read) {
    this.listen = listen;
    this.read = read;
  }
}
Score.prototype.total = function () {
  return this.listen + this.read;
};
const sohyun = new Score(400, 500);
console.log(sohyun.total());

console.log(Score.prototype === sohyun.__proto__); // true

function MyChew(flavor) {
  this.flavor = flavor;
}

const flavor = [
  { taste: "strawberry", rank: 1 },
  { taste: "orange", rank: 2 },
  { taste: "lemon", rank: 3 },
];

MyChew.prototype.ranking = function (num) {
  for (var i = 0; i < flavor.length; i++) {
    if (this.flavor[i].rank === num) {
      console.log(num + "위 상품의 맛은 " + this.flavor[i].taste);
    }
  }
};

const choice = new MyChew(flavor);
choice.ranking(1);

// MyChew를 벤치마킹하여 순위에 맞게 YouChew를 만드려고 한다.
function YouChew(flavor) {
  this.flavor = flavor;
}
YouChew.prototype = Object.create(MyChew.prototype); // ranking : function(){}
// YouChew.prototype = new MyChew();// flavor : undefined , sugar : sugar , ranking : function(){}
const choice2 = new YouChew(flavor);
choice2.ranking(2);

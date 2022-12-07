# 객체지향 프로그래밍(OOP)

컴퓨터 프로그램을 명령어의 목록으로 보는 시각에서 벗어나 "객체(Object)"들의 모임으로 파악하고자 하는 프로그래밍 패러다임을 말한다.

# OOP의 장점

**1. 유지보수가 쉽다.** <br/>
**2. 직관적인 코드 분석을 가능하게한다.** <br/>
<br/>
흔히 얽히고 설켜 유지보수가 힘든 코드를 스파게티코드라 하는데, 이를 피하기위해 사용한다.<br/>
<br/>
<br/>
위의 장점들을 관통하는 객체지향프로그래밍의 중요한 특성은 **강한 응집력과 약한 결합력**을 지향한다.<br/>
<br/>
응집력 : 프로그램의 한 요소가 해당 기능을 수행하기 위해 얼마만큼의 연관된 책임과 아이디어가 뭉쳐있는지를 나타내는 정도. 프로그램의 한 요소가 특정 목적을 위해 밀접하게 연관된 기능들이 모여서 구현되어 있고, 지나치게 많은 일을 하지 않으면 그것을 응집력이 높다고 표현한다.<br/>
결합력 : 프로그램의 한 요소가 다른것과 얼마나 강력하게 연결되어있는지 얼마나 의존적인지 나타내틑 정도. 결합력이 낮다는것은 한요소가 다른요소와 관계를 크게 맺고있지않은 상태를말한다.<br/><br/>
=> oop의 경우 하나의 문제 해결을 위해 데이터를 모아놓은 객체를 활용한 프로그래밍을 지향하므로 응집력이 강화되고, 클래스간에 독립적으로 디자인함으로써 결합력을 약하게 할수있다.

# OOP의 구성요소

## 1. class

객체, 즉 인스턴스를 찍어내는 공장

## 2. instance

class(공장)에서 찍어내는 결과물

## 3. 프로퍼티,메서드

인스턴스의 속성 및 어떠한 기능을 수행하는 역할

```
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

```

> 화살표함수는 생성자 함수로 사용할수없다. prototype 프로퍼티를 가지고 있지 않기 때문이다.

# OOP의 특성

**1. 캡슐화**<br/>
연관있는 변수와 함수를 클래스로 묶는 작업을 말한다.<br/>
따라서 내부 데이터를 외부에서 직접 접근하지 못하게 은닉화를 시켜준다. => 정보은닉<br/>
**2. 상속**<br/>
상위개념의 속성을 하위개념이 물려받는다.<br/>
클래스 간의 계층관계구조를 형성함으로써 **공통되는 로직의 재사용성을 높이는 기법**이다.<br/>
**3. 추상화**<br/>
공통의 속성이나 기능을 묶어 이름을 붙인다.<br/>
따라서 객체들이 가진 공통의 특성을 파악하고 불필요한 특성을 제거하는과정이다.<br/><br/>
가령 JS에서 EventListener를 사용한다고 할 때, 내부적으로 작동방식은 모르지만 어떻게 작동하는지만 알면 그것을 사용할 수 있다. 이처럼 추상화는 필요한 기능만 핵심적으로 제시해주는 기법이며 OOP뿐만 아니라 프로그래밍 전반적으로 중요하게 사용된다.
**4. 다형성**<br/>
자식 클래스에서 부모에게서 상속받은 메소드들을 덮어씌워 좀 더 복잡하고, 기능이 많은 메소드들로 사용하는것을 말한다.<br/>
즉 같은 이름을 가진 메소드라 할지라고 부모클래스의 메소드와 자식클래스의 메소드는 다른 기능이다.<br/>
(부모 클래스에서 정의된 메소드의 작업시 자식클래스에서 다른것으로 override(대체) 될 수 있다.)<br/>

# 자바스크립트의 OOP : 프로토타입 (prototype)

C++과 JAVA는 클래스를 기반으로 객체지향 프로그래밍을 하지만, 자바스크립트는 클래스라는 개념이 없다.<br/><br/>
클래스가 없는 자바스크립트로 어떻게 객체지향프로그래밍을 할수있을까?<br/><br/>
자바스크립트는 클래스를 사용하지않고 prototype을 통해 객체 생성 및 상속을 구현한 것이다.<br/>
ES6표준에서 class라는 문법이 생겼지만 이것은 함수로 prototype을 더 쉽게 사용하기위한 문법일뿐 자바스크립트가 클래스로 바뀐것은 아니다.<br/>
**자바스크립트는 여전히 prototype 기반 언어이다.**

---

- 자바스크립트는 프로토타입을 기반으로 상속을 구현하여 불필요한 중복을 제거한다.
- 기존의 코드를 적극적으로 재사용하는것이다.
  <br/>
  이게무슨말이냐~~~<br/>
  <br/>
  생성자함수에서는 동일한 생성자함수에의해 생성된 모든 인스턴스가 동일한 메서드를 중복소유하여 메모리를 불필요하게 낭비했다.<br/>

```
function Score(listen, read){
  this.listen = listen;
  this.read = read;
  this.total = function () {
    return this.listen + this.read;
  }
}

const 소현 = new Score(400,500);

console.log(소현.total());
```

이를 해결하기 위해 prototype 이라는 공간에 하나릐 메소드를 저장해 사용하기때문에 메모리 공간을 효율적으로 사용할수있다.<br/>
<br/>
자신의 상태를 나타내는 listen,read프로퍼티는 개별적으로 소유하고 내용이 동일한 메서드를 상속을 통해 공유하여 사용하는것이다.<br/>

```
function Score(listen, read) {
  this.listen = listen;
  this.read = read;
}

Score.prototype.total = function () {
  return this.listen + this.read;
}

const 소현 = new Score(400,500);

console.log(소현.total());
```

이 때 알아야할것이 `prototype vs __proto__`이다.<br/>
간단하게 말하면 관점의 차이로 명칭이 다른것인데,<br/>
`prototype` : 부모<br/>
`__proto__` : 자식<br/>
<br/>

더 쉽게 생각해서, `prototype`은 붕어빵 틀 자체에 기능을 추가하는것, `__proto__`는 붕어빵에 추가했던 그 기능.<br/>
<br/>

모든 객체는 prototype이라는 내부슬롯을 갖는다.<br/>
그리고 모든 프로토타입은 생성자함수와 연결되어있다.<br/>
즉, new함수로 생성한 객체와, 프로토타입과, 생성자함수는 다음과같이 서로 연결되어있다.<br/>
<img src="https://velog.velcdn.com/images%2F5o_hyun%2Fpost%2F22b5556b-7030-4a3a-ad5e-eb718843c80f%2Fimage.png">

따라서 Score의 prototype과 소현의 **proto**는 동일하게 Score의 프로토타입을 기리키므로 true다.

```
console.log(Score.prototype === 소현.__proto__); // true
```

# 자바스크립트에서 객체를 생성하는 방법

## 1. 리터럴표기

자바스크립트에서 객체를 생성하는 가장 쉬운방법<br/>
`{}`를 사용해 묶고 각 프로퍼티에 값을 매칭시키면 끝이다.<br/>

## 2. 생성자함수

앞서 배웠듯이 new연산자로 인스턴스를 생성하고 this로 해당 인스턴스를 바인딩한다.<br/>
또한 생성자함수에의해 생성된 모든 인스턴스가 동일한 메서드를 중복소유하여 불필요한 메모리를 차지하기때문에,<br/>
prototype을 사용해 불필요한 메모리 사용을 줄인다.<br/>

## 3. class

C++ , java와 같은 객체 지향 프로그래밍 언어에서 사용하는 것과 유사하게 class를 사용할 수 있게 문법을 제공하기 위해 ES6 추가된 Syntactic sugar ( 문법적 설탕 ) 이다.
<br/><br/>
자바스크립트에서 클래스란.. 생성자함수다!
Syntactic sugar여서 사용방법만다를뿐 똑같다.

1. `class`로 선언
2. `constructor`(생성자)로 초기값 설정
3. `extends` 클래스 간의 상속가능
4. `super`로 부모클래스의 프로퍼티 참조

```
class User {
  constructor(name,age,city){
    this.name = name;
    this.age = age;
    this.city = city;
  }
}

class Introduce extends User {
  constructor(name,age,city,hobby){
    super(name,age,city);
    this.hobby = hobby;
  }
  introduce () {
    return this.name + '은 ' + this.city + '에 살고 취미는 ' +
    	   this.hobby + '입니다.';
  }
}

const 소영 = new Introduce('소영',24,'seoul','축구');

console.log(소영.introduce()); // 소영은 seoul에 살고 취미는 축구입니다.
```

## 4. Object.create()

Object.create() 메서드는 지정된 프로토타입 객체 및 속성(프로퍼티)을 갖는 새 겍체를 만든다.<br/>
주로 기존의 객체를 상속해 확장하는데 사용한다.<br/>
<br/>
Object.create(prototype)<br/>
: prototype을 넣어 객체를 생성한다.인자로 null을 넣어주면 아무것도 상속받지 않는 객체를 만들 수 있다.<br/>
<br/>
Object.getPrototypeOf(obj)<br/>
: 해당 객체의 프로토 타입을 가져올 수 있다.<br/>
<br/>
Object.setPrototypeOf(obj, proto)<br/>
: 해당 객체의 프로토 타입을 설정할 수 있다.<br/>

```
/* 마이쮸에서 어느 맛이 가장 잘팔릴까? 1위면 '1', 2위면 '2'를 썼을 때, 해당하는 맛이 나오게끔 출력하자 */

function MyChew(flavor) {
  this.flavor = flavor;
  this.sugar = 'sugar';
}

const flavor = [
  {taste : 'strawberry' , rank : 1},
  {taste : 'orange' , rank : 2},
  {taste : 'lemon' , rank : 3}
];

MyChew.prototype.ranking = function(num){
  for(var i = 0; i < this.flavor.length; i++ ){
    if(this.flavor[i].rank === num){
      console.log(num + '위 상품은 ' + this.flavor[i].taste + '맛 입니다.');
    }
  }
}

const choice = new MyChew(flavor);
choice.ranking(1); // 1위 상품은 strawberry맛 입니다.


// MyChew를 벤치마킹하여 순위에 맞게 YouChew를 만드려고 한다.


function YouChew(flavor) {
  this.flavor = flavor;
}

YouChew.prototype = Object.create(MyChew.prototype);
// YouChew.prototype = new MyChew();

const choice2 = new YouChew(flavor);
choice2.ranking(2); // 2위 상품은 orange맛 입니다.
```

> 여기서 Object.create() 와 new 의 차이점은 무엇일까?<br/><br/>
> Object.create()는 빈객체를 생성하여 해당하는 프로토타입만 넣어 사용하기때문에, 불필효한 부분도 상속받는 new 보다 메모리공간에 효율적이다.

```
/* 1 */
YouChew.prototype = Object.create(MyChew.prototype); // ranking : function(){}
// --> Object.create 는 부모의 프로토타입인 ranking만 가져옴

/* 2 */
YouChew.prototype = new MyChew(); // flavor : undefined , sugar : sugar , ranking : function(){}
// --> new 를 사용해 부모의 객체를 생성한다면 모든 내용을 상속받게 됨
```

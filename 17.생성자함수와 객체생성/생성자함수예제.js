/* 생성자함수 자유롭게 만들어보기 */

// 1. 팀플 인원 파악하기
function Member(major, name, age) {
  this.major = major;
  this.name = name;
  this.age = age;
}

const person1 = new Member("경영학과", "가길동", "23");
const person2 = new Member("전자공학과", "나길동", "27");
const person3 = new Member("컴퓨터공학과", "다길동", "25");

console.log(person1, person2, person3);

// 2. 학생의 토익점수 출력하기
function Score(num, name, listen, read) {
  this.num = num;
  this.name = name;
  this.listen = listen;
  this.read = read;
  this.total = Number(listen) + Number(read);

  this.getInfo = () => {
    let str = "";
    str +=
      "학생번호 " +
      this.num +
      "번 " +
      this.name +
      "의 토익점수는 " +
      this.total +
      "입니다";
    return str;
  };
}

const student1 = new Score(1, "가길동", 300, 200);
const student2 = new Score(2, "나길동", 420, 400);
const student3 = new Score(3, "다길동", 270, 150);

console.log(student1.getInfo(), student2.getInfo(), student3.getInfo());

// 3. 정육점 그램수에 따른 가격계산
function Meat(name, weight, price) {
  this.name = name;
  this.weight = weight;
  this.price = price;
  this.calculate = (buyWeight) => {
    return this.price * (buyWeight / this.weight);
  };
}
const 삼겹살 = new Meat("삼겹살", 100, 1300);
const 오겹살 = new Meat("오겹살", 100, 1150);

console.log(삼겹살.calculate(500));
console.log(오겹살.calculate(500));

// 4. 몸무게검사 ( 정상몸무게 : (신장 - 100 ) x 0.9)
function Doctor(name, height, weight) {
  this.name = name;
  this.height = height;
  this.weight = weight;
  this.result = () => {
    const standard = (this.height - 100) * 0.9;
    if (standard - 5 > this.weight) {
      return (
        "환자의 몸무게는 " +
        this.weight +
        " 표준몸무게는 " +
        standard +
        "이므로 미달입니다."
      );
    } else if (standard < this.weight) {
      return (
        "환자의 몸무게는 " +
        this.weight +
        " 표준몸무게는 " +
        standard +
        "이므로 과체중입니다."
      );
    } else {
      return (
        "환자의 몸무게는 " +
        this.weight +
        " 표준몸무게는 " +
        standard +
        "이므로 정상입니다."
      );
    }
  };
}

const people1 = new Doctor("가길동", 170, 70);
console.log(people1.result());

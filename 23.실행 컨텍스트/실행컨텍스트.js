var person = "sohyun";
const outer = () => {
  var person2 = "nayoung";
  const inner = () => {
    console.log(person);
    console.log(person2);
  };
  inner();
  console.log("print finish");
};
outer();
console.log("finish");
// sohyun
// nayoung
// print finish
// finish

var hello = "hello";

function sayHello() {
  // var로 선언된 변수는 함수 스코프이다.
  var hello = "hello hello";
  console.log(hello);
}

if (true) {
  var hello = "hello hello hello";
}
console.log(hello);
console.log(sayHello());

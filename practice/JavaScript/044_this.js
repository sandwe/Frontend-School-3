function a() {
  console.log(this);
}
a();

function b() {
  console.log("hello world");
}
window.b();

let test = {
  one: 1,
  two: 2,
  three: function () {
    console.log(this);
  },
};

test.three();
let test2 = test.three;
test2();

// 추가 예제 //
function sayName() {
  console.log(this.name);
}

var name = "Hero";

let peter = {
  name: "Peter Parker",
  sayName: sayName,
};

let bruce = {
  name: "Bruce Wayne",
  sayName: sayName,
};

sayName(); // Hero
peter.sayName(); // Peter Parker
bruce.sayName(); // Bruce Wayne

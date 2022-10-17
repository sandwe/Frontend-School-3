console.log("0" == 0); // true
console.log("0" === 0); // false

console.log(0 == false); // true
console.log(0 === false); // false

console.log(1 == true); // true
console.log(1 === true); // false

console.log("true" == true); // false
// 위의 비교로 오류난 적 있음
// 1. json에서 값 가져올 때 true를 문자열로 가져와서 error가 난 적 있습니다.
// 2. json에서 값 가져올 때 ture가 True로 되어 있어서 error가 난 적 있습니다.
console.log("true" === true); // false

console.log(0 == ""); // true, 주의!
console.log(0 === ""); // false, 주의!

console.log(false == ""); // true, 주의!
console.log(false === ""); // false, 주의!

console.log(false == nul); // false, 주의!
console.log(false === null); // false

console.log(false == undefined); // false, 주의!
console.log(false === undefined); // false

console.log(NaN == NaN); // false, 주의!
console.log(NaN === NaN); // false

console.log([] == ![]); //true
// 1. 빈 Array는 비교구문이 나왔을 때 강제로 숫자로 형변환이 된다.
// console.log(0 == ![]);
// 2. ![] == false입니다.
console.log([] == 0); // true

function truthyAndFalsy(value) {
  return !!value;
}

truthyAndFalsy([]); // 주의: true
truthyAndFalsy({}); // 주의: true
truthyAndFalsy(""); // 주의: false
truthyAndFalsy(null); // 주의: false
truthyAndFalsy(undefined); // 주의: false
truthyAndFalsy(NaN); // 주의: false
truthyAndFalsy(Infinity); // 주의: true

truthyAndFalsy(-100); // true
truthyAndFalsy("hello"); // true

// 드모르간의 법칙
// not (A or B) = (not A) and (not B)
// not (A and B) = (not A) or (not B)
!(a % 3 == 0 || a % 5 == 0);
!(a % 3 == 0) && !(a % 5 == 0);

for (let i = 0; i < 100; i++) {
  if (!(a % 3 == 0 || a % 5 == 0)) {
    console.log(i);
  }
}

for (let i = 0; i < 100; i++) {
  if (!(a % 3 == 0) && !(a % 5 == 0)) {
    console.log(i);
  }
}

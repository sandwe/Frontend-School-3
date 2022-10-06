// 문자열 뒤집기
let x = "hello world";
let result = "";

// 1. 뒤에서 부터 반복
for (let i = x.length - 1; i >= 0; i--) {
  result += x[i];
}

// 2. 앞에서 부터 반복
result = "";
for (let i = 0; i < x.length; i++) {
  result = x[i] + result;
}

// ------------------------------------
// 시그마 (1부터 100까지의 합)
let s1 = 0;
for (let i = 1; i < 101; i++) {
  s += i;
}

// ------------------------------------
// 팩토리얼 (5!)
let s2 = 1;
for (let i = 1; i < 6; i++) {
  s2 *= i;
}

// -------------------------------
function getSum(input) {
  // const nums = input.split("").map((v) => +v);
  // return nums.reduce((arr, cur) => arr + cur);

  let s = 0;
  for (const i of input) {
    s += parseInt(i);
  }
  return s;
}
console.log(getSum("12345"));

// ---------------------------------
// 부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?
// 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
// (※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)

let count = 0;
const str = Array(10000)
  .fill(0)
  .map((_, i) => i + 1)
  .join("");
for (let i = 0; i < str.length; i++) {
  str[i] === "8" && count++;
}
console.log(count);

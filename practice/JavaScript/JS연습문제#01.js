// 1.1 다음 값의 평균을 구하세요.
// 1.2 분산을 구하세요.
const arr1 = [10, 20, 30, 10, 20, 30, 40, 10];
const avg = arr1.reduce((acc, cur) => acc + cur, 0) / arr1.length;
const variance = arr1.reduce((acc, cur) => acc + (cur - avg) ** 2, 0) / arr1.length;

console.log(avg);
console.log(variance);

// 2. 다음 string의 평균 값을 구하세요.
const str = "5, 4, 10, 2, 5";
const arr2 = str.split(",").map(Number);
console.log(arr2.reduce((acc, cur) => acc + cur, 0) / arr2.length);

// 3. 다음 array의 각 자리수의 합을 구하세요.
const arr3 = [11, 22, 33, 111, 2];
const nums = arr3.join("");
let sum = 0;
for (const i of nums) {
  sum += parseInt(i);
}
console.log(sum);

// 4-1. 반복문만 사용하여 숫자 단위 콤마 찍기
const num = 1000000;
let result = "";
const arr4 = String(num).split("");
arr4.forEach((v, idx) => {
  result += idx % 3 === 1 ? "," + v : v;
});
console.log(result);

// 4-2. 반복문만 사용하여 숫자 단위 콤마 없애기
const num2 = "1,000,000";
let result2 = "";
for (const i of num2) {
  if (i === ",") continue;
  result2 += i;
}
console.log(parseInt(result2));

// 4-3. 문자열 뒤집기
const str2 = "JavaScript";
let result3 = "";
for (const i of str2) {
  result3 = i + result3;
}
console.log(result3);

// 5. 로또번호를 추첨하는 코드를 작성해주세요.
const arr5 = Array(6).fill(0);
for (let i = 0; i < 6; i++) {
  arr5[i] = Math.floor(Math.random() * 45 + 1);
  console.log(`${i + 1}번째 번호는 ${arr5[i]}입니다!`);
}

console.log(`2000회 로또 번호는 ${arr5.join(", ")}입니다`);

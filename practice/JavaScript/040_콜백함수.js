function sum(x, y, 콜백함수) {
  // 1000 줄
  콜백함수(x + y);
  // 1000 줄
  // return x + y
}

function documentWriter(s) {
  document.write("콜백함수", s);
}

// sum(10, 20, console.log)
// sum(10, 20, document.write) // 안되는 이유 확인중
sum(10, 20, documentWriter);

// 구문 : arr.map(callback(currentValue[, index[, array]])[, thisArg])

let arr1 = [10, 20, 30, 40, 50];
arr.map(제곱);

function 제곱(x) {
  return x ** 2;
} // x => x**2
arr1.map((x) => x ** 2);

function 두배(x) {
  console.log(x * 2);
}

let arr2 = [10, 20, 30, 40, 50];
arr2.forEach(두배);

//////////////////
// 문제 : 화살표 함수를 사용해서 아래 map과 동일한 기능을 하는 forEach문을 완성해주세요.
let arr3 = [10, 20, 30, 40, 50];
arr3.map((x) => x ** 2);

let result = [];
arr4.forEach((e) => {
  result.push(e ** 2);
});
console.log(result);

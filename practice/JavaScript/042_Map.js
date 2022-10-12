let m = new Map();
m.set("하나", 1).set("둘", 2).set("셋", 3).set("넷", 4);

console.log(m);

let data1 = new Map(Object.entries({one: 1, two: 2}));
let data2 = new Map([
  ["one", 1],
  ["two", 2],
]);

let data3 = new Map({one: 1, two: 2}); // X
let data4 = new Map("hello world"); // X
let data5 = new Map([10, 20, 30, 40]); // X

// Object는 직접 순회가 불가능하다.
let data = {one: 1, two: 2};

for (const i of data) {
  console.log(i); // TypeError: data is not iterable
}

// Map은 직접 순회가 가능하다.
for (const i of m) {
  console.log(i);
}

for (const [i, j] of m) {
  console.log(i, j);
}

m.keys();
m.values();
m.entries();

// Map - Object 간의 형변환
let 맵 = new Map(Object.entries({one: 1, two: 2}));
let 오브젝트 = Object.fromEntries(m);

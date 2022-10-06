let data = {
  one: "하나",
  two: "둘",
  three: "셋",
  four: "넷",
};

for (const i in data) {
  console.log(i); // one two three four
  console.log(data[i]); // 하나 둘 셋 넷
}

let data2 = [10, 20, 30, 40];

for (const i in data2) {
  console.log(i); // 0 1 2 3
}

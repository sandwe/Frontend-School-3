let i = 2;
let j = 1;

while (i < 10) {
  while (j < 10) {
    console.log(`${i} X ${j} = ${i * j}`);
  }
  j = 1;
  i++;
}

let value = [10, 20, 30, 40];
let x = 0;
while (x < value.length) {
  console.log(value[x]);
  x++;
}

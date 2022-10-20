function sayHello() {
  return new Promise((resolve, reject) => {
    //reject(new Error());
    const hello = "hello hello";
    resolve(hello); // 성공
  });
}

// then도 많이쓰면 복잡해진다 -> async/await이 나옴
// sayHello()
//   .then((resolveData) => {
//     console.log(resolveData);
//     return resolveData;
//   })
//   .then((resolveData) => {
//     console.log(resolveData);
//     return resolveData;
//   })
//   .then((resolveData) => {
//     console.log(resolveData);
//     return resolveData;
//   })
//   .then((resolveData) => {
//     console.log(resolveData);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function test() {
  const hello1 = await sayHello(); // sayHello 실행이 끝나 프로미스가 반환되는걸 기다림
  console.log(hello1);
}

test();

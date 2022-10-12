let s = new Set("abcdeeeeeee");

let 회사게시판 = ["이호준", "이호준", "이호준", "김은하", "김은하", "이준근"];
// 문제 1: 몇 명이 게시물을 썼나요?
let set = new Set(회사게시판);
set.size;

// 문제 2 : 각각 몇 개의 게시물을 작성하였나요?
for (const i of set) {
  console.log(
    i,
    회사게시판.filter((e) => e === i)
  );
}

for (const i of set) {
  console.log(i, 회사게시판.filter((e) => e === i).length);
}

let map = new Map();
for (const i of 회사게시판) {
  map.set(i, (map.get(i) || 0) + 1);
}

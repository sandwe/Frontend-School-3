try {
  let x = 10;
  let y = 20;
  console.log(x + y);
} catch (e) {
  console.error(e);
} finally {
  console.log("finally");
}

// new Error(message);
// new SyntaxError(message);
// new ReferenceError(message);

// 에러가 발생해도 마지막 finally를 실행하므로 서비스는 정상적으로 작동할 수 있다.
// 대신 일부 기능이 실행이 안될 수도 있다.
try {
  let x = 10;
  let y = 20;
  console.log(x + y + z);
} catch (e) {
  console.error(e); // ReferenceError: z is not defined, 브라우저에서 에러를 던져준다.
  console.log(e); // ReferenceError: z is not defined
} finally {
  console.log("finally"); // finally
}

let x = 10;
let y = 20;
console.log(x + y + z); // z가 할당되지 않았고, 서비스가 멈춰버린다.
let z = 30; // 할

// 예시
a(); // 로고 받아오기 메서드 - by 길동
b(); // 상품 정보 받아오기 메서드 - by 철수
c(); // 장바구니 구현 함수 - by 둘리

// a()에서 문제가 발생되면 b(), c()도 동작하지 않는다.
// 이때, try/catch/finally를 사용하여야 한다!!

try {
  let x = 10;
  let y = 10;
  throw new Error("에러야!");
} catch (e) {
  console.error(e);
  console.dir(e);
  console.error(e.message);
} finally {
  console.log("end");
}

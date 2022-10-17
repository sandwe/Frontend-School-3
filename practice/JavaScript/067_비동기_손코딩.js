/*
new Promise((resolve, reject) => {
        //code
    })
    .then(result => result)
    .then(result => result)
    .catch(err => err)
    .finally(result => result)
*/

// - pending(대기상태) - resolve(해결) - fulfilled(성공)
// - pending(대기상태) - reject(거부) - rejected(실패)

///////////////////////////
let p = new Promise(function (resolve, reject) {
  // 비동기적으로 실행될 code 작성
  resolve("hello world");
})
  .then((메시지) => {
    alert(메시지);
    return 메시지.split(" ")[0];
  })
  .then((메시지) => {
    alert(메시지);
    throw Error("Error 발생! 경고경고!");
    return 메시지[0];
  })
  .then((메시지) => {
    alert(메시지);
    return 메시지;
  })
  .catch((메시지) => {
    console.log(메시지);
    alert("catch 실행!!");
  });

console.log(p);

/////////////////////////
//4. proudctName을 h2에, price를 p에 넣어서 렌더링 하기!ㄴ
fetch("http://test.api.weniv.co.kr/mall")
  .then((productData) => productData.json())
  .then((productData) => productData)
  .then((productData) => {
    console.log(productData.map((item) => item.productName));
    return productData;
  })
  .then((productData) => {
    console.log(productData.map((item) => item.price).filter((item) => item >= 10000));
    return productData;
  })
  .then((productData) => {
    const main = document.createElement("main");
    productData.forEach((item) => {
      const ProductCard = document.createElement("article");
      const productName = document.createElement("h2");
      const productPrice = document.createElement("p");

      productName.textContent = `상품명 : ${item.productName}`;
      productPrice.textContent = `가격 : ${item.price}`;

      ProductCard.appendChild(productName);
      ProductCard.appendChild(productPrice);

      main.appendChild(ProductCard);
    });
    document.body.appendChild(main);
  })
  .catch((error) => {
    alert("에러!");
    // error page로 리다이렉트
    console.log(error);
  });

// 수업 예제 참고하여 다시 작성해본 코드
fetch("http://test.api.weniv.co.kr/mall")
  .then((productData) => productData.json())
  .then((productData) => {
    console.log(productData.map((item) => item.productName));
    return productData;
  })
  .then((productData) => {
    console.log(productData.filter((item) => item.price > 10000));
    return productData;
  })
  .then((productData) => {
    const main = document.createElement("main");
    productData.forEach((item) => {
      const productCard = document.createElement("article");
      const productName = document.createElement("h2");
      const productPrice = document.createElement("p");

      productName.textContent = `상품명 : ${item.productName}`;
      productPrice.textContent = `가격 : ${item.price}`;

      productCard.append(productName, productPrice);

      main.appendChild(productCard);
    });
    document.body.appendChild(main);
  })
  .catch((error) => {
    // 에러 페이지로 리다이렉트
    console.log(error);
  });

// 5. 호준님 async/await 예제
async function getData() {
  const response = await fetch(`http://test.api.weniv.co.kr/mall`);
  const productData = await response.json();
  console.log(productData);
  console.log(productData.map((item) => item.productName));
  console.log(productData.map((item) => item.price).filter((item) => item > 10000));

  const main = document.createElement("main");
  productData.forEach((item) => {
    const ProductCard = document.createElement("article");
    const productName = document.createElement("h2");
    const productPrice = document.createElement("p");

    productName.textContent = `상품명 : ${item.productName}`;
    productPrice.textContent = `가격 : ${item.price}`;

    ProductCard.appendChild(productName);
    ProductCard.appendChild(productPrice);

    main.appendChild(ProductCard);
  });
  document.body.appendChild(main);
}

getData();

////////////////////
// async는 Promise의 문법적 설탕이다.
async function f() {
  return 100;
}

f().then(alert); // 100

////////////////////
async function f() {
  return "hello world";
}
console.log("!");
f()
  .then((메시지) => {
    alert(메시지);
    return 메시지.split(" ")[0];
  })
  .then((메시지) => {
    alert(메시지);
    return 메시지[0];
  });
console.log("!!");

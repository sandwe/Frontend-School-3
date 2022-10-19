fetch("http://test.api.weniv.co.kr/mall").then((data) =>
  data
    .json()
    // data => productData라고 명시하기
    .then((data) => {
      for (const item of data) {
        console.log(item.productName);
      }
      return data;
    })
    .then((data) => {
      // v => item이라고 명시하기
      console.log(data.filter((v) => v.price >= 10000));
      return data;
    })
    .then((data) => {
      const renderingData = [];
      // forEach문에다가 넣어서 쓰기
      for (const item of data) {
        renderingData.push(`
          <h2>${item.productName}</h2>
          <p>${item.price}</p>
        `);
      }
      document.querySelector("body").innerHTML = renderingData.join("");
    })
    .catch((error) => {
      alert("데이터를 불러오는데 실패했습니다! 다시 시도해주세요");
      // alert보다도 에러 처리를 해야함
      // error page로 리다이렉트
      console.log(error);
    })
);

// 1. 추가 then을 사용하여 7개의 항목 중 productName만 출력해보세요.
// 2. 추가 then을 사용하여 7개의 항목 중 price가 10000원 이상 되는 코드를 작성해주세요.

async function getData() {
  try {
    const response = await fetch("http://test.api.weniv.co.kr/mall");
    const data = await response.json();
    console.log(data.map((v) => v.productName));
    console.log(data.filter((v) => v.price >= 10000));
    const renderingData = [];
    for (const item of data) {
      renderingData.push(`
          <h2>${item.productName}</h2>
          <p>${item.price}</p>
        `);
    }
    document.querySelector("body").innerHTML = renderingData.join("");
  } catch (error) {
    console.log(error);
  }
}

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

// 1. 추가 then을 사용하여 7개의 항목 productName만 출력해보세요.(console.log)
// 2. 추가 then을 사용하여 7개의 항목 중 price가 10000원 이상 되는 product를 출력하는 코드를 작성해주세요.(console.log)
// 3. 추가 then을 사용하여 7개의 항목의 productName과 price를 각각 h2와 p태그로 생성하여(DOM) 화면에 출력해주세요.
// 4. error 처리를 해주세요.

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

// 5. 혹시 시간이 남으신 분들은 해당 코드를 뒤에서 배울 async, await으로 고쳐보세요!
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

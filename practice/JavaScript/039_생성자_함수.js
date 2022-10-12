let book = {
  책이름: "완전정복 JavaScript",
  책가격: 1000,
  저자: "홍길동",
  출판일: "22.10.11",
};

// new 키워드로 함수 호출했을 때 다음과 같이 동작한다.
function Book(책이름, 책가격, 저자, 출판일) {
  // this = {};
  this.책이름 = 책이름;
  this.책가격 = 책가격;
  this.저자 = 저자;
  this.출판일 = 출판일;
  // return this;
}

let data = Book("CSS", 10, "길동", "22.12.30"); // undefined

let data1 = new Book("HTML", 10, "길동", "22.12.30");
let data2 = new Book("CSS", 10, "길동", "22.12.30");
let data3 = new Book("JS", 10, "길동", "22.12.30");

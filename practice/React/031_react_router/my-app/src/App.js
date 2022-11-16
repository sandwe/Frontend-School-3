import {BrowserRouter, Routes, Route, Link, useLocation, useParams} from "react-router-dom";
import React from "react";

function Main() {
  return <h2>Main</h2>;
}

function ProductDetails() {
  // const id = useLocation().pathname.split("/")[2];
  const {id} = useParams();

  return (
    <>
      <h2>ProductDetails</h2>
      <p>상품 아이디: {id}</p>
    </>
  );
}

function Cart() {
  return <h2>Cart</h2>;
}

function Buy() {
  return <h2>Buy</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Link to="/">홈</Link>
      <Link to="/product/1">상품정보</Link>
      <Link to="/cart">장바구니</Link>
      <Link to="/buy">구매</Link>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/buy" element={<Buy />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

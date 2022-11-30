import React from "react";
import axiios from "axios";
import {useEffect} from "react";
import axios from "axios";

export default function Product() {
  useEffect(() => {
    axios.get("http://test.api.weniv.co.kr/mall").then((res) => {
      console.log("axios");
      console.log(res);
      console.log(res.data);
    });

    fetch("http://test.api.weniv.co.kr/mall")
      .then((res) => {
        console.log("fetch");
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return <div>Product</div>;
}

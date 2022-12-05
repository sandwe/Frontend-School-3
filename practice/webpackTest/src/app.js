import {plus} from "./plus";
import "./style.css";
// import tiger from "./tiger.png";
// import android from "./android.png";

console.log(plus(3, 7));

console.log(process.env.NODE_ENV); // 현재 개발환경 확인

console.log(dev);
console.log(pro);

let env;
if (process.env.NODE_ENV === "development") {
  env = dev;
} else {
  env = pro;
}

document.addEventListener("DOMContentLoaded", () => {
  // document.body.innerHTML = `<img src="${tiger}" /><img src="${android}" />`;
});

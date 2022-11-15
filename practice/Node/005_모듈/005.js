import * as a from "./003.js";
console.log(a.이름);
console.log(a.나이);

import {이름 as 이름1, 나이 as 나이1} from "./003.js";
console.log(이름1);
console.log(나이1);

// 다음과 같은 형태로 모듈을 많이 불러온다.
import {이름, 나이} from "./003.js";
console.log(이름);
console.log(나이);

import {initializeApp} from "firebase/app";
import {getFirestore, Timestamp} from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// firebase 초기화
const app = initializeApp(firebaseConfig);
// firestore 초기화
const appFireStore = getFirestore(app);
// 인증 초기화
const appAuth = getAuth();
// 타임스탬프 추가
// firestore에 저장 시 저장 시간도 같이 넘겨 시간에 따라 데이터 정렬할 수 있게 한다.
const timeStamp = Timestamp;

export {appFireStore, appAuth, timeStamp};

import {onSnapshot, collection, query, where, orderBy} from "firebase/firestore";
import {useEffect, useState} from "react";
import {appFireStore} from "../firebase/config";

export const useCollection = (transaction, myQuery) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  // collection에 변화가 생길 때마다 실행한다. 때문에 하상 최신 컬렉션 상태를 반환 받을 수 있다.
  useEffect(() => {
    // 쿼리로 해당 유저의 일기만 가져온다.
    let q;
    if (myQuery) {
      // where(필더링할 필드, 비교 연산자, 값) myQuery에 배열로 각각의 매개변수를 담고, 스프레드 문법으로 인자 리스트로 전달되도록 한다.
      q = query(collection(appFireStore, transaction), where(...myQuery), orderBy("createdTime", "desc"));
    }

    const unsubscribe = onSnapshot(
      myQuery ? q : collection(appFireStore, transaction),
      (snapshot) => {
        let result = [];
        console.log(snapshot);
        // 응답받은 collection이 snapshot에 저장된다.
        snapshot.docs.forEach((doc) => {
          console.log(doc.data());
          result.push({...doc.data(), id: doc.id});
          console.log(result);
        });
        setDocuments(result);
        setError(null);
      },
      (error) => {
        setError(error.message);
      }
    );

    // useEffect 훅의 return 값에 함수를 반환하면 clean-up 함수가 된다.
    // 따라서 api 통신 시 useEffect 훅을 많이 사용한다.
    return unsubscribe;
  }, [collection]);

  return {documents, error};
};

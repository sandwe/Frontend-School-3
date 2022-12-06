import {useState} from "react";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {appAuth} from "../firebase/config";
import {useAuthContext} from "./useAuthContext";

export const useSignup = () => {
  // 에러 정보 저장
  const [error, setError] = useState(null);
  // 현재 서버와 통신중인 상태 저장
  const [isPending, setIsPending] = useState(false);

  // 유저 정보를 전역에서 활요하도록 dispatch 함수를 통해 업데이트한다.
  const {dispatch} = useAuthContext();

  // signup 훅을 만든다. 매개변수: email, password, displayName
  const signup = (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    createUserWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        // 회원 정보 받기 실패
        if (!user) {
          throw new Error("회원가입에 실패했습니다.");
        }

        updateProfile(appAuth.currentUser, {displayName})
          .then(() => {
            dispatch({type: "login", payload: user});
            setError(null);
            setIsPending(false);
          })
          .catch((err) => {
            setError(err.message);
            setIsPending(false);
            console.log(err.message);
          });
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
        console.log(err.message);
      });
  };

  return {error, isPending, signup};
};

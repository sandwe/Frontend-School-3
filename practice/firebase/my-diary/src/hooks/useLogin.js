import {useState} from "react";
import {appAuth} from "../firebase/config";
import {signInWithEmailAndPassword} from "firebase/auth";
import {useAuthContext} from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const {dispatch} = useAuthContext();

  const login = (email, password) => {
    setError(null);
    setIsPending(true);

    signInWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({type: "login", payload: user});
        setError(null);
        setIsPending(false);

        if (!user) {
          throw new Error("로그인에 실패했습니다.");
        }
      })
      .catch((err) => {
        setError(err.messsage);
        setIsPending(false);
        console.log(err.messsage);
      });
  };

  return {error, isPending, login};
};

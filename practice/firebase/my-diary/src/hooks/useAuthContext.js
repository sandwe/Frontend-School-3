// 생성한 context 객체에 값을 쉽게 전달하기 위한 커스텀 훅
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  // state, dispatch 두가지가 리턴된다.
  return context;
};

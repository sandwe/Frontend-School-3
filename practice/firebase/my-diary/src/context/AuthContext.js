import {createContext, useEffect, useReducer} from "react";
import {appAuth} from "../firebase/config";

// context 객체 생성
const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {...state, user: action.payload};
    case "logout":
      return {...state, user: null};
    case "authIsReady":
      return {...state, user: action.payload, isAuthReady: true};
    default:
      return state;
  }
};

/// context 객체를 구독할 컴포넌트 묶음 범위 설정
const AuthContextProvider = ({children}) => {
  useEffect(() => {
    const unsubscribe = appAuth.onAuthStateChanged(function (user) {
      dispatch({type: "authIsReady", payload: user});
      unsubscribe();
    });
  }, []);

  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthReady: false, // 유저 정보를 받아왔는지 여부
  });

  return <AuthContext.Provider value={{...state, dispatch}}>{children}</AuthContext.Provider>;
};

export {AuthContext, AuthContextProvider};

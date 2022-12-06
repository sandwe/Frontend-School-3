import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import Nav from "./components/Nav";
import {useAuthContext} from "./hooks/useAuthContext";

function App() {
  const {isAuthReady, user} = useAuthContext();

  return (
    <div>
      {isAuthReady ? (
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate replace={true} to="/login"></Navigate>}></Route>
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" replace={true} />}></Route>
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" replace={true} />}></Route>
          </Routes>
        </BrowserRouter>
      ) : (
        "loading..."
      )}
    </div>
  );
}

export default App;

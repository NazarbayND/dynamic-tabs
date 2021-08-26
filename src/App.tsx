import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import "./App.scss";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import { RootState } from "./store/configureStore";
import { getUser } from "./store/user/user";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const user = useSelector((state: RootState) => state.user);
  return <div className="App">{user.email ? <MainPage /> : <LoginPage />}</div>;
};

export default App;

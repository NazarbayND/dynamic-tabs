import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import "./App.scss";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import { RootState } from "./store/configureStore";

const App = () => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <div className="App">
      {user.email ? <Redirect to="/" /> : <Redirect to="/login" />}
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={MainPage} />
      </Switch>
    </div>
  );
};

export default App;

import React from "react";
import "rsuite/dist/styles/rsuite-default.min.css";
import "./styles/main.scss";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <Switch>
      <PrivateRoute exact path="/">
        <Home />
      </PrivateRoute>
      <PublicRoute exact path="/signin">
        <SignIn />
      </PublicRoute>
    </Switch>
  );
}

export default App;

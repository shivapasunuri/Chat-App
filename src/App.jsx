import React from "react";
import "rsuite/dist/styles/rsuite-default.min.css";
import "./styles/main.scss";
import { Switch } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home/Index";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { ProfileProvider } from "./context/profile.context";

function App() {
  return (
    <ProfileProvider>
      <Switch>
        <PublicRoute path="/signin">
          <SignIn />
        </PublicRoute>
        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </ProfileProvider>
  );
}

export default App;

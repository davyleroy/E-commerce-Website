import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginSignup from "./Pages/LoginSignup";
import Registration from "./Components/Registration";
import PasswordReset from "./Components/PasswordReset";
import UserProfile from "./Components/UserProfile";
import Shop from "./Pages/Shop";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Shop} />
        <Route path="/login" component={LoginSignup} />
        <Route path="/register" component={Registration} />
        <Route path="/reset-password" component={PasswordReset} />
        <Route path="/profile" component={UserProfile} />
      </Switch>
    </Router>
  );
};

export default App;

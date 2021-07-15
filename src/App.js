import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Authentication/Login";
import Index from "./pages/Index";
import Register from "./Authentication/Register";
import MainView from "./dashboard/MainView";
import Payments from "./dashboard/Payments";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={MainView} />
          <Route exact path="/payment" component={Payments} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

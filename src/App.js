import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Index from "./pages/Index";
import Register from "./Authentication/Register";
import Payments from "./dashboard/Payments";
import Dashboard from "./dashboard/Dashboard";
import Transactions from "./dashboard/components/Transactions";
import Send from "./dashboard/containers/Send";

function App() {
   const user = localStorage.getItem("token");
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/payment" component={Payments} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/transactions" component={Transactions} />
          <Route exact path="/send" component={Send} />
          <Route path="/" exact component={() => (!user ? <Index /> : <Redirect to="/dashboard" />)} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import Vote from "./pages/vote/Vote";
import Dropdown from "./components/Dropdown";
import useEagerConnect from "hooks/useEagerConnect";
import ToastListener from "components/ToastListener";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Compound from "@compound-finance/compound-js";

console.log(Compound["cETH"]);
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEagerConnect();
  return (
    <div>
      <Router>
        <Navbar toggle={toggle} isOpen={isOpen} />
        <Dropdown toggle={toggle} isOpen={isOpen} />
        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path="/vote" component={Vote} exact />
        </Switch>
        <ToastListener />
      </Router>
    </div>
  );
}

export default App;

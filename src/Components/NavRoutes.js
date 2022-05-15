import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";
import Support from "../pages/Support/Support";
import View from "../pages/View/View";
function NavRoutes(){
  return (
    <BrowserRouter>
<Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/view" exact component={View} /> 
      <Route path="/support" component={Support} />
    </Switch>
    </BrowserRouter>

  );
};

export default NavRoutes;

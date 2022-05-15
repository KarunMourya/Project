import React from "react";
import { BrowserRouter } from "react-router-dom";
import Edit from '../pages/Edit/Edit'
import { Route, Switch } from "react-router-dom";
import Profile from "../pages/Profile/Profile";
import Post from "../pages/Post/Post";
function SideRoute(){
  return (
    <BrowserRouter>
<Switch>
      <Route path='/post' exact component={Post} />
      <Route path="/" exact component={Profile} />
      <Route path="/setting" exact component={Edit}/>
    </Switch>
    </BrowserRouter>

  );
};

export default SideRoute;

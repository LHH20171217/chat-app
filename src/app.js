import React from "react";

import Login from "./container/login/login.js";
import Register from "./container/register/register.js";
import AuthRoute from "./component/authroute/authroute.js";
import BossInfo from "./container/bossinfo/bossinfo.js";
import Geniusinfo from "./container/geniusinfo/geniusinfo";
import Dashboard from "./component/dashboard/dashboard";
import Chat from "./component/chat/chat";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <AuthRoute></AuthRoute>
        <Switch>
          <Route path="/bossinfo" component={BossInfo}></Route>
          <Route path="/geniusinfo" component={Geniusinfo}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/chat/:user" component={Chat}></Route>
          <Route component={Dashboard}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;

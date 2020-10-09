import React from "react";
import { Route, Switch,withRouter } from "react-router-dom";
import List from './List';
import Navbar from './Navbar';
import Add from './Add';



function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route   exact path='/' component={List} />
        <Route  path='/Cart' component={Add} />
      </Switch>
    </div>
  );
}

export default App;

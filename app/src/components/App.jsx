import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import MainEdit from "./MainEdit";

function App(){
    console.log("seen")
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/:id' component={MainEdit}/>
          </Switch>
        </Router>
    )
}
export default App;
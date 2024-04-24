import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from "./Main";
import MainEdit from "./MainEdit";

function App(){
    return (
        <Router>
          <Switch>
            <Route path='/employees' exact={true} component={Main}/>
            <Route path='/employees/:id' component={MainEdit}/>
          </Switch>
        </Router>
    )
}

export default App;
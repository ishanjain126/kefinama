import React from 'react'
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import KefinamaPage from './Component/Pages/KefinamaPage';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={KefinamaPage} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;

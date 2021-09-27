import React from 'react';
import './App.css';
import Users from "./components/Users";
import {
    BrowserRouter as Router,
    // Switch,
    Route,
    Link,
    // withRouter
} from "react-router-dom";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <div className="App">
        <Router>
            <Link to={'/users'}>Users</Link>

            <Route exact path={'/users'} component={Users}/>
            <Route path={'/users/:id'} component={UserDetails}/>
        </Router>
    </div>
  );
}

export default App;

import {Switch, Route} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Register from "../pages/Register";

function Routes() {
    return ( 
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/dashboard/:id">
                <Dashboard />
            </Route>
        </Switch>
     );
}

export default Routes;
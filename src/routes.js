import {BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './pages/Home';

import Navbar from "./Components/layout/Navbar";

const Routes = () => {
    return(
        <BrowserRouter>
            <Navbar />
              <Switch>
                <Route exact path="/" component={ Home }/>
            </Switch>   
        </BrowserRouter>
       
    )
}

export default Routes;
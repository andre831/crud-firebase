import {BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import FormAdd from './pages/FormAdd';
import FormUpdate from './pages/FormUpdate';

import Navbar from "./Components/layout/Navbar";

const Routes = () => {
    return(
        <BrowserRouter>
            <Navbar />
              <Switch>
                <Route exact path="/" component={ Home }/>
                <Route exact path="/formadd" component={ FormAdd }/>
                <Route exact path="/formupdate?:id" component={ FormUpdate }/>
            </Switch>   
        </BrowserRouter>
       
    )
}

export default Routes;
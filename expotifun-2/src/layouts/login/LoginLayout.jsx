import React from "react";
import '../../assets/css/login.css';
import Dashboard from "../Dashboard/Dashboard"
import { Route, Switch, HashRouter } from "react-router-dom";
import LoginView from "../../views/LoginView/login.view";
import DashboardTemp from "../../views/LoginView/dashboard-view";

class LoginLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HashRouter>
                    <Switch>
                        <Route exact to="login"     component={LoginView}></Route>
                        <Route exact to="intranet"  component={DashboardTemp}></Route>
                    </Switch>
                </HashRouter>
            </div>
            
            
            )
            }
        }
        
export default LoginLayout;
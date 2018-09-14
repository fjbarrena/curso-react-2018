import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Playlists from '../pages/Playlists';
import Albums from '../pages/Albums';
import Settings from '../pages/Settings';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Switch>
                <Route exact path='/'          component={Dashboard} />
                <Route path='/playlists' component={Playlists} />
                <Route path='/albums'    component={Albums} />
                <Route path='/settings'  component={Settings} />
            </Switch>
        )
    }
}

export default Main;
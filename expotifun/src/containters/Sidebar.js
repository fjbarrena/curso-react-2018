import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <ul>
                    <li>
                        <Link to="/playlists">Playlists</Link>
                    </li>
                    <li>
                        <Link to="/albums">Albums</Link>
                    </li>
                    <li>
                        <Link to="/settings">Settings</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;
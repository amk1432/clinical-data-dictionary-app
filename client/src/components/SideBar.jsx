import React, { Component } from 'react';
import Links from './Links';

class SideBar extends Component {
    render() {
        return (
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <Links />
                </div>
            </nav>
        );
    }
}

export default SideBar;
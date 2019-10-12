import React, { Component } from 'react';
import Links from './Links';

class SideBar extends Component {
    render() {
        return (
            <nav class="col-md-2 d-none d-md-block bg-light sidebar">
                <div class="sidebar-sticky">
                    <Links />
                </div>
            </nav>
        );
    }
}

export default SideBar;
import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="/">Clinical Data Dictionary</a>
            </nav>
        );
    }
}

export default NavBar;
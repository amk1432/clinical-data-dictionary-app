import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Links extends Component {
    render() {
        return (
            <ul className="nav flex-column">
                <li className="nav-item">
                    <NavLink to="/form" className="nav-link" activeStyle={{ color: '#007bff' }}>
                        Form
                            </NavLink>
                </li>
                <li className="nav-item">

                    <NavLink to="/contributor" className="nav-link" activeStyle={{ color: '#007bff' }}>
                        Contributor
                            </NavLink>
                </li>
                <li className="nav-item">

                    <NavLink to="/admin" className="nav-link" activeStyle={{ color: '#007bff' }}>
                        Admin
                            </NavLink>
                </li>

            </ul>
        );
    }
}

export default Links;
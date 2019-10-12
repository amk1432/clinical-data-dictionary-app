import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Links extends Component {
    render() {
        return (
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link to="/form" className="nav-link">
                        Form
                            </Link>
                </li>
                <li className="nav-item">

                    <Link to="/contributor" className="nav-link">
                        Contributor
                            </Link>
                </li>
                <li className="nav-item">

                    <Link to="/admin" className="nav-link">
                        Admin
                            </Link>
                </li>

            </ul>
        );
    }
}

export default Links;
import React, { Component } from 'react';
import Admin from './Admin';

class Contributor extends Component {
    render() {
        return (
            <div>
                <Admin role="contributor" roleName="Contributor" />
            </div>
        );
    }
}

export default Contributor;
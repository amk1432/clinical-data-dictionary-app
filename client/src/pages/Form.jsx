import React, { Component } from 'react';
import api from '../api';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            variables: []
        }
    }

    componentDidMount() {
        api.getAllVariables().then(variables => {
            this.setState({
                variables: variables.data,
            })
        })
    }

    render() {
        const formElem = this.state.variables.map((variable, key) =>
            <input type="text" placeholder={variable.description} />
        );
        return (
            <form action="">
                {formElem}
            </form>
        )
    }
}

export default Form;
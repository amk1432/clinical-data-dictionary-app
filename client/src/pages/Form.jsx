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
        let showButton;
        let noDataWarning;
        if( this.state.variables.length > 0){
            showButton =  <button type="button" className="btn btn-primary" >Submit</button>;
           
        }else if(this.state.variables.length === 0 ){
            noDataWarning = <p>Please add variables via Admin console to see the form</p>;
        }
        const formElem = this.state.variables.map((variable, key) =>
            <div className="form-group col-md-6">
                <label htmlFor="variableName">Variable Name</label>
                <input type="text" className="form-control" placeholder={variable.description} />
            </div>
        );
        return (
            <div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mt-3">
                    <h1 className="h2">Clinical Data</h1>
                          
                </div>

                <div className="form-row">
                    {noDataWarning}
                        {formElem}
                       {showButton}
                    
                    </div>
            </div>
        )
    }
}

export default Form;
import React, { Component } from 'react';
import ReactTable from 'react-table';
import api from '../api';
import 'react-table/react-table.css';


class UpdateVariable extends Component {
    updateVariable = event => {
        event.preventDefault();

        //make api call to update and update the state 
        console.log(this.props.id);
        console.log(this.props.payload);
    }

    render() {
        return (
            <button className="btn btn-sm btn-block btn-outline-secondary py-0" onClick={this.updateVariable}>Update</button>
        );
    }
}
class DeleteVariable extends Component {
    deleteVariable = event => {
        event.preventDefault();

        console.log(this.props.id);
        if (window.confirm(` Do you want to remove the variable  ${this.props.id} permanently?`)) {
            api.deleteVariableById(this.props.id);
            //remove the data from state
        }
    }

    render() {
        return (
            <button className="btn btn-sm btn-block btn-outline-danger py-0" onClick={this.deleteVariable}>Delete</button>
        );
    }
}

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            variables: [],
            columns: [],
            isLoading: true
        }
    }

    componentDidMount() {
        api.getAllVariables().then(variables => {
            this.setState({
                variables: variables.data,
                isLoading: false
            })
        })
    }

    render() {

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: false
            },
            {
                Header: 'Variable Name',
                accessor: 'variableName',
                filterable: true
            },
            {
                Header: 'Crf DataType',
                accessor: 'crfDataType',
                filterable: false
            },
            {
                Header: 'Description',
                accessor: 'description',
                filterable: false
            },
            {
                Header: 'Value Lower Limit',
                accessor: 'valueLowerLimit',
                filterable: false
            },
            {
                Header: 'Is Required',
                accessor: 'isRequired',
                filterable: false
            },
            {
                Header: 'Units',
                accessor: 'units',
                filterable: false
            },
            {
                Header: 'Value Upper Limit',
                accessor: 'valueUpperLimit',
                filterable: false
            },
            {
                Header: 'Form Name',
                accessor: 'formName',
                filterable: false
            },
            {
                Header: 'Actions',
                Cell: row => (
                    <div>
                        <UpdateVariable id={row.original._id} payload={row.original} />
                        <DeleteVariable id={row.original._id} />
                    </div>
                )
            }
        ];

        return (
            <div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mt-3">
                    <h1 className="h2">Admin Console</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <button className="btn btn-sm btn-outline-secondary">Add</button>
                    </div>
                </div>

                <ReactTable
                    data={this.state.variables}
                    columns={columns}
                    loading={this.state.isLoading}
                    defaultPageSize={10}
                    showPageSizeOptions={true}
                    minRows={0}
                />
            </div>
        );

    }
}

export default Admin;
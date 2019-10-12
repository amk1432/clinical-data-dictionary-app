import React, { Component } from 'react';
import ReactTable from 'react-table';
import api from '../api';
import 'react-table/react-table.css';

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

        ];

        return (
            <div>
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
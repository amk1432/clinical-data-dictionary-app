import React, { Component } from 'react';
import ReactTable from 'react-table';
import api from '../api';

import 'react-table/react-table.css';


class UpdateVariable extends Component {

    updateVariable = event => {
        event.preventDefault();
        this.props.showDataModal(this.props.id, this.props.payload);
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
            isLoading: true,
            showModal: false,
            modalAction: "",

            variableId: "",
            variableName: "",
            category: "",
            crfDataType: "",
            description: "",
            valueLowerLimit: 0,
            valueUpperLimit: 0,
            isRequired: false,
            units: "",
            formName: []

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

    setVariable = (variable) => {
        var existingVariables = this.state.variables;
        existingVariables.push(variable);
        this.setState({
            variables: existingVariables
        });
    }
    setShowModal = (show) => {
        this.setState({
            showModal: show
        })
    }

    setModalAction = (action) => {
        this.setState({
            modalAction: action
        })
    }

    setVariableId = (val) => {
        this.setState({
            variableId: val
        })
    }

    setVariableName = (val) => {
        this.setState({
            variableName: val
        })
    }

    setCategory = (val) => {
        this.setState({
            category: val
        })
    }

    setCrfDataType = (val) => {
        this.setState({
            crfDataType: val
        })
    }

    setDescription = (val) => {
        this.setState({
            description: val
        })
    }

    setValueLowerLimit = (val) => {
        this.setState({
            valueLowerLimit: val
        })
    }

    setValueUpperLimit = (val) => {
        this.setState({
            valueUpperLimit: val
        })
    }

    setIsRequired = (val) => {
        this.setState({
            isRequired: val
        })
    }

    setUnits = (val) => {
        this.setState({
            units: val
        })
    }

    setFormName = (val) => {
        this.setState({
            formName: val
        })
    }

    getVariableId = () => {
        return this.state.variableId;
    }

    getModalAction = () => {
        return this.state.modalAction;
    }

    getModalData = () => {
        return {
            variableName: this.state.variableName,
            category: this.state.category,
            crfDataType: this.state.crfDataType,
            description: this.state.description,
            valueLowerLimit: this.state.valueLowerLimit,
            valueUpperLimit: this.state.valueUpperLimit,
            isRequired: this.state.isRequired,
            units: this.state.units,
            formName: this.state.formName
        }
    }

    setModalData = (data) => {
        if (data != null && typeof data != undefined) {
            if (data.hasOwnProperty('variableName')) {
                this.setVariableName(data.variableName);
            } else {
                this.setVariableName("");
            }

            if (data.hasOwnProperty('category')) {
                this.setCategory(data.category);
            } else {
                this.setCategory("");
            }

            if (data.hasOwnProperty('crfDataType')) {
                this.setCrfDataType(data.crfDataType);
            } else {
                this.setCrfDataType("");
            }

            if (data.hasOwnProperty('description')) {
                this.setDescription(data.description);
            } else {
                this.setDescription("");
            }

            if (data.hasOwnProperty('valueLowerLimit')) {
                this.setValueLowerLimit(data.valueLowerLimit);
            } else {
                this.setValueLowerLimit(0);
            }

            if (data.hasOwnProperty('valueUpperLimit')) {
                this.setValueUpperLimit(data.valueUpperLimit);
            } else {
                this.setValueUpperLimit(0);
            }

            if (data.hasOwnProperty('isRequired')) {
                this.setIsRequired(data.isRequired);
            } else {
                this.setIsRequired(false);
            }

            if (data.hasOwnProperty('units')) {
                this.setUnits(data.units);
            } else {
                this.setUnits("");
            }

            if (data.hasOwnProperty('formName')) {
                this.setFormName(data.formName);
            } else {
                this.setFormName([]);
            }
        }
    }

    updateVariableState(id, updatedVariable) {
        var index = this.state.variables.findIndex(x => x._id === id);
        if (index !== -1)
            this.setState({
                variables: [
                    ...this.state.variables.slice(0, index),
                    Object.assign({}, this.state.variables[index], updatedVariable),
                    ...this.state.variables.slice(index + 1)
                ]
            });
    }

    openDataModalToAdd = () => {
        this.setShowModal(true);
        this.setModalAction("Add");
        this.setVariableId("");
        this.setModalData({});
    }

    openDataModalToUpdate = (id, data) => {
        this.setShowModal(true);
        this.setModalAction("Update");
        this.setVariableId(id);
        this.setModalData(data);
    }

    closeDataModal = () => {
        this.setShowModal(false);
        this.setModalAction("");
        this.setVariableId("");
        this.setModalData({});
    }

    handleInputChange = async event => {
        const id = event.target.id;
        const value = event.target.value;

        if (id === "variableName") {
            this.setVariableName(value);
        }
        else if (id === "category") {
            this.setCategory(value);
        }
        else if (id === "crfDataType") {
            this.setCrfDataType(value);
        }
        else if (id === "description") {
            this.setDescription(value);
        }
        else if (id === "valueLowerLimit") {
            this.setValueLowerLimit(value);
        }
        else if (id === "valueUpperLimit") {
            this.setValueUpperLimit(value);
        }
        else if (id === "isRequired") {
            const checked = event.target.checked;
            this.setIsRequired(checked);
        }
        else if (id === "units") {
            this.setUnits(value);
        }
        else if (id === "formName") {
            this.setFormName(new Array(value));
        }

    }

    addOrUpdateVariable = () => {
        const action = this.getModalAction();
        if (action != null && action === "Add") {
            const payload = this.getModalData();
            console.log(payload)
            api.insertVariable(payload).then(responseData => {
                console.log(responseData)
                if (responseData.status === 200) {
                    payload._id = responseData.data.id;
                    this.setVariable(payload);
                }

            })
        } else if (action != null && action === "Update") {
            const id = this.getVariableId();
            const payload = this.getModalData();
            console.log(id);
            console.log(payload)

            api.adminUpdateVariableById(id, payload).then(responseData => {
                console.log(responseData)
                if (responseData.status === 200) {
                    console.log(responseData.data)
                    this.updateVariableState(id, responseData.data);
                }
            })
        }
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
                        <UpdateVariable id={row.original._id} payload={row.original} showDataModal={this.openDataModalToUpdate} />
                        <DeleteVariable id={row.original._id} />
                    </div>
                )
            }
        ];

        var modalDisplayStyle = {
            display: this.state.showModal ? "block" : "none"
        };

        return (
            <div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mt-3">
                    <h1 className="h2">Admin Console</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <button className="btn btn-sm btn-outline-secondary" onClick={this.openDataModalToAdd}>Add</button>
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

                <div className="modal fade show" style={modalDisplayStyle} role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{this.state.modalAction} Variable</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.closeDataModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="variableName">Variable Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="variableName"
                                            placeholder="Variable Name"
                                            onChange={this.handleInputChange}
                                            value={this.state.variableName}
                                        />
                                    </div>

                                    <div className="form-group col-md-6">
                                        <label htmlFor="category">Category</label>
                                        <select
                                            id="category"
                                            className="form-control"
                                            onChange={this.handleInputChange}
                                            value={this.state.category}
                                        >
                                            <option value="Calculated">Calculated</option>
                                            <option value="Original">Original</option>
                                            <option value="Derived">Derived</option>
                                        </select>
                                    </div>

                                    <div className="form-group col-md-6">
                                        <label htmlFor="crfDataType">DataType</label>
                                        <select
                                            id="crfDataType"
                                            className="form-control"
                                            onChange={this.handleInputChange}
                                            value={this.state.crfDataType}
                                        >
                                            <option value="Number">Number</option>
                                            <option value="Text">Text</option>
                                            <option value="Date">Date</option>
                                            <option value="Time">Time</option>
                                        </select>
                                    </div>

                                    <div className="form-group col-md-6">
                                        <label htmlFor="description">Description</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="description"
                                            placeholder="Description"
                                            onChange={this.handleInputChange}
                                            value={this.state.description}
                                        />
                                    </div>

                                    <div className="form-group col-md-6">
                                        <label htmlFor="valueLowerLimit">Value LowerLimit</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="valueLowerLimit"
                                            placeholder="Value LowerLimit"
                                            onChange={this.handleInputChange}
                                            value={this.state.valueLowerLimit}
                                        />
                                    </div>

                                    <div className="form-group col-md-6">
                                        <label htmlFor="valueUpperLimit">Value UpperLimit</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="valueUpperLimit"
                                            placeholder="Value UpperLimit"
                                            onChange={this.handleInputChange}
                                            value={this.state.valueUpperLimit}
                                        />
                                    </div>

                                    <div className="form-group  col-md-6">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="isRequired"
                                                onChange={this.handleInputChange}
                                                checked={this.state.isRequired}
                                            />
                                            <label className="form-check-label" htmlFor="isRequired"> Required</label>

                                        </div>
                                    </div>

                                    <div className="form-group col-md-6">
                                        <label htmlFor="units">Units</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="units"
                                            placeholder="Units"
                                            onChange={this.handleInputChange}
                                            value={this.state.units}
                                        />
                                    </div>

                                    <div className="form-group col-md-6">
                                        <select
                                            id="formName"
                                            className="form-control"
                                            onChange={this.handleInputChange}
                                            value={this.state.formName}
                                            multiple={true}>
                                            <option value="">Select Form Name</option>
                                            <option value="Clinical Data">Clinical Data</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.closeDataModal}>Close</button>
                                <button type="button" className="btn btn-primary" onClick={this.addOrUpdateVariable}>{this.state.modalAction}</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );

    }
}

export default Admin;
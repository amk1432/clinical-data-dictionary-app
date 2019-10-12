import React, { Component } from 'react';

class DataModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: "",
            crfDataType: "",
            description: "",
            formName: [],
            variableName: ""
        }
    }
    hideDataModal = () => {
        this.setState({
            category: "",
            crfDataType: "",
            description: "",
            formName: [],
            variableName: ""
        });
        this.props.hideModal();
    }

    addOrUpdateVariable = () => {
        this.props.addOrUpdateVariable(this.state);
    }

    handleVariableNameChange = event => {
        const name = event.target.value;
        this.setState({ variableName: name });
    }

    render() {
        var modalDisplayStyle = {
            display: this.props.displayModal ? "block" : "none"
        };

        return (
            <div className="modal fade show" style={modalDisplayStyle} role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{this.props.modalAction} Variable</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.hideDataModal}>
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
                                        onChange={this.handleVariableNameChange}
                                        value={this.props.modalFormData.variableName}
                                    />
                                </div>

                                <div className="form-group col-md-6">
                                    <label htmlFor="category">Category</label>
                                    <select id="category" className="form-control">
                                        <option>Calculated</option>
                                        <option selected>Original</option>
                                        <option>Derived</option>
                                    </select>
                                </div>

                                <div className="form-group col-md-6">
                                    <label htmlFor="crfDataType">DataType</label>
                                    <select id="crfDataType" className="form-control">
                                        <option>Number</option>
                                        <option selected>Text</option>
                                        <option>Date</option>
                                        <option>Time</option>
                                    </select>
                                </div>

                                <div className="form-group col-md-6">
                                    <label htmlFor="description">Description</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="description"
                                        placeholder="Description"
                                        onChange={this.handleDescriptionChange}
                                        value={this.props.modalFormData.description}
                                    />
                                </div>

                                <div className="form-group col-md-6">
                                    <label htmlFor="valueLowerLimit">Value LowerLimit</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="valueLowerLimit"
                                        placeholder="Value LowerLimit"
                                        onChange={this.handleValueLowerLimitChange}
                                        value={this.props.modalFormData.valueLowerLimit}
                                    />
                                </div>

                                <div className="form-group col-md-6">
                                    <label htmlFor="valueUpperLimit">Value UpperLimit</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="valueUpperLimit"
                                        placeholder="Value UpperLimit"
                                        onChange={this.handleValueUpperLimitChange}
                                        value={this.props.modalFormData.valueUpperLimit}
                                    />
                                </div>

                                <div className="form-group  col-md-6">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="isRequired"></input>
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
                                        onChange={this.handleUnitsChange}
                                        value={this.props.modalFormData.units}
                                    />
                                </div>

                                <div className="form-group col-md-6">
                                    <label htmlFor="formName">Form Name</label>
                                    <select id="formName" className="form-control" defaultValue="Clinical Data">
                                        <option value="Clinical Data">Clinical Data</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.hideDataModal}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.addOrUpdateVariable}>{this.props.modalAction}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DataModal;
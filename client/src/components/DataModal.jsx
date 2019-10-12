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
                            <div className="form-group col-md-6">
                                <label htmlFor="variableName">Variable Name</label>
                                <input type="text" className="form-control" id="variableName" placeholder="Variable Name" onChange={this.handleVariableNameChange} value={this.props.modataFormData.category} />
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
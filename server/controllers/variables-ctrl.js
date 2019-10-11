import Variable from '../models/variables';

export const createVariable = async (body) => {

    var variable = new Variable(body);

    if (!variable) {
        return { resStatus: 401, error: "Request body missing!" };
    }

    try {
        variable = await variable.save();
        return {
            resStatus: 200,
            id: variable._id,
            message: 'Variable created!'
        }
    } catch (error) {
        return {
            resStatus: 500,
            error,
            message: 'Variable not created!',
        }
    }
};

export const getAllVariables = async () => {
    try {
        var variables = await Variable.find();
        return {
            resStatus: 200,
            data: variables
        }
    } catch (error) {
        return {
            resStatus: 500,
            data: error
        }
    }
};

export const updateVariable = async (id, body, isAdmin) => {
    if (!id) {
        return { resStatus: 401, error: "Request id missing!" };
    }

    if (!body) {
        return { resStatus: 401, error: "Request body missing!" };
    }

    try {
        var variable = await Variable.findById(id);
        if( isAdmin )
            variable.variableName = body.variableName;

        variable.category = body.category;
        variable.crfDataType = body.crfDataType;
        variable.description = body.description;
        variable.valueLowerLimit = body.valueLowerLimit;
        variable.valueUpperLimit = body.valueUpperLimit;
        variable.isRequired = body.isRequired;
        variable.units = body.units;
        variable.formName = body.formName;

        variable = await variable.save();
        return {
            resStatus: 200,
            data: variable
        }
    } catch (error) {
        return {
            resStatus: 500,
            data: error
        }
    }
};

export const deleteVariable = async ( id ) => {
    try {
        var variable = await Variable.findByIdAndDelete(id);
        return {
            resStatus: 200,
            data: variable
        }
    } catch (error) {
        return {
            resStatus: 500,
            data: error
        }
    }
};
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Variables = new Schema(
    {
        variableName: { type: String, required: true },
        category: { type: String, required: true },
        crfDataType: { type: String, required: true },
        description: { type: String, required: true },
        valueLowerLimit: { type: Number },
        valueUpperLimit: { type: Number },
        isRequired: { type: Boolean },
        units: { type: String },
        formName: { type: [String], required: true },
    }
)

export default mongoose.model('variables', Variables);
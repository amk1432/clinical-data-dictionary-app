import { getAllVariables, updateVariable } from '../controllers/variables-ctrl';

export const handleAllVariables = async (req, res) => {
    var crudRes = await getAllVariables();
    res.status(crudRes.resStatus).send(crudRes.data);
};

export const handleUpdateVariable = async (req, res, isAdmin) => {
    var crudRes = await updateVariable(req.params.id, req.body, isAdmin);
    res.status(crudRes.resStatus).send(crudRes.data);
};

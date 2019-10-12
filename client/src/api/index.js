import axios from 'axios';

const api = axios.create(
    {
        baseURL: 'http://localhost:4701/clinical-data-dictionary/api'
    }
);

export const insertVariable = payload => api.post('/admin/variable', payload);
export const getAllVariables = () => api.get('/common/variables');
export const adminUpdateVariableById = (id, payload) => api.put('/admin/variable/${id}', payload);
export const contributorUpdateVariableById = (id, payload) => api.put('/contributor/variable/${id}', payload);
export const deleteVariableById = id => api.delete('/admin/variable/${id}');

const apis = {
    insertVariable,
    getAllVariables,
    adminUpdateVariableById,
    contributorUpdateVariableById,
    deleteVariableById
};

export default apis;
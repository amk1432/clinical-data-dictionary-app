import express from 'express';
import bodyParser from 'body-parser';
import {createVariable, deleteVariable} from '../controllers/variables-ctrl';
import { handleUpdateVariable } from './routes-util';


var router = express.Router();
var jsonParser = bodyParser.json();

router.post('/variable', jsonParser, async function (req, res) {
    var body = req.body;
    var crudRes = await createVariable(  body );
    res.status(crudRes.resStatus).send(crudRes);
});

router.put('/variable/:id', jsonParser, async function (req, res) {
    var isAdmin = true;
    await handleUpdateVariable( req, res, isAdmin);
});

router.delete('/variable/:id', async function (req, res) {
    var id = req.params.id;
    var crudRes = await deleteVariable ( id );
    res.status(crudRes.resStatus).send(crudRes);
});

export default router;
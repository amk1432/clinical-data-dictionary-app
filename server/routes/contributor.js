import express from 'express';
import bodyParser from 'body-parser';
import { handleUpdateVariable} from './routes-util';

var router = express.Router();
var jsonParser = bodyParser.json();

router.put("/variable/:id", jsonParser, async ( req, res )=>{
    var isAdmin = false;
    await handleUpdateVariable (req, res, isAdmin);
});

export default router;
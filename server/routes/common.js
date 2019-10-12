import express from 'express';
import {handleAllVariables} from './routes-util';

var router = express.Router();

router.get("/variables", async function( req, res){
    await handleAllVariables(req, res); 
});

export default router;
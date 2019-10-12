import express from 'express';
import adminRouter from './routes/admin';
import contributorRouter from './routes/contributor';
import viewerRouter from './routes/viewer';
import db from './db/mongo';
import cors from 'cors';

const app = express();
const apiPort = 4701;

app.use(cors()); // specifying middleware

db.on('connected', function () {  
  console.log('Mongoose default connection open to ' + 'mongodb://127.0.0.1:27017/clinicaldatadictionary');
});

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
  res.send('Welcome to Clinical Data Dictionary App!')
});

var contextPath = "/clinical-data-dictionary/api";

app.use(contextPath + '/admin', adminRouter);
app.use(contextPath + '/contributor', contributorRouter);
app.use(contextPath + '/common', viewerRouter);

app.use(function(req,res){
  res.status(404).send({"resStatus": 404, "data": "invalid url"});
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
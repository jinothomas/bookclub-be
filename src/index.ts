import express, { Express } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import book_routes from './routes/books-routes';
import { connectToDatabase } from './utils/database/db-connector';

const application: Express = express();
const port =  process.env.port || 8080;
dotenv.config();

const start = async () => {
    connectToDatabase().then(()=>{
        application.listen(port, () => {
            console.log(`Server is started at Port no: ${port}`);
        });
        addroutes(application);
    }).catch((error: Error)=>{
        console.log('Unable to connect to the Database, Error: '+ error);
        console.log('Terminating process....');
        process.exit();
    });
}

const addroutes = (application: Express) => {
    application.use(bodyParser.json());
    application.use('/book', book_routes);
}

start();







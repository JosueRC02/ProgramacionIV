import app from './app'
import { config } from "dotenv";
import './database/database'
import mongoose from 'mongoose';

config();

const main = () => {
    app.listen(process.env.PORT);
    console.log('Server listen on port', process.env.PORT)
};

main();
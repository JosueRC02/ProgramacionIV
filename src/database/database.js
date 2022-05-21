import mongoose from "mongoose";
import { config } from "dotenv";

config();

const connection = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@api.f32y7.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`
mongoose
    .connect(connection, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connected to succesfully")
    })
    .catch((e) => {
        console.log("Database error", e)
    })

const getConnection = () => {
    return connection;
}

module.exports = {
    getConnection
};
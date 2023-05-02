import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
    age: String,
    name: String,
    route: String,
    address: String
})
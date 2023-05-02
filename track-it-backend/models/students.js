import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
    rollno: String,
    name: String,
    feestatus: String,
    route: String,
    received: Boolean
})


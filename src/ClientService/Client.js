import mongoose from 'mongoose'

const Client = new mongoose.Schema({
    username: {type: String, required: true},
    name: {type: String, required: true},
    number: {type: Number, required: true}
})

export default mongoose.model('User', Client)
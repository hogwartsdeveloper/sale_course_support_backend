import mongoose from 'mongoose';

const Greet = new mongoose.Schema({
    title: {type: String, required: true},
    picture: {type: String}
})

export default mongoose.model('Greet', Greet)
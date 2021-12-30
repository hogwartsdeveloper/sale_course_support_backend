import express from "express";
import fileUpload from "express-fileupload";
import router from "./router.js";
import mongoose from "mongoose";

const PORT = 5001;
const DB_URL = `mongodb+srv://userb:ucYa9niO3pCS6jB1@cluster0.m1y2t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()
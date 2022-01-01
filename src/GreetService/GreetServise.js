import Greet from "./Greet.js";
import FileService from "../FileService.js";

class GreetServise {
    async create(title, picture) {
        const fileName = FileService.saveFile(picture)
        const createdGreed = await Greet.create({...title, picture: fileName})
        return createdGreed;
    }

    async getAll() {
        const greets = await Greet.find()
        return greets
    }

    async getOne(id) {
        if (!id) {
            throw new Error('Не указан ID')
        }
        const greet = await Greet.findById(id);
        return greet
    }

    async update(greet) {
        if (!greet._id) {
            throw new Error('Не указан ID')
        }
        const updateGreet = await Greet.findByIdAndUpdate(greet._id, greet, {new: true})
        return updateGreet
    }

    async delete(id) {
        if(!id) {
            throw new Error('Не указан ID')
        }
        const greetP = await this.getOne(id)
        FileService.deleteFile(greetP.picture)

        const greet = await Greet.findByIdAndDelete(id);
        return greet
    }
}

export default new GreetServise()
import * as uuid from "uuid";
import * as path from "path";
import fs from "fs";

class FileService {
    saveFile(file) {
        try {
            const fileName = uuid.v4() + '.jpg';
            const filePath = path.resolve('static', fileName);
            file.mv(filePath);

            return fileName;
        } catch (e) {
            console.log(e)
        }
    }
    deleteFile(file) {
        try {
            const filePath = path.resolve('static', file);
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.log(err)
                    return
                }
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export default new FileService();
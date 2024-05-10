import { join } from "path";
import {logger, pipelineAsync} from "./utils/log";
import { createWriteStream } from "fs";

const Busboy = require("busboy");


export class UploadHandler {
    #io
    #socketId
    constructor(io, socketId) {
    }

    registerEvents(headers, onFinish) {
        const busboy = Busboy({headers})
        busboy.on("file", this.#onFile.bind(this))

        busboy.on("finish", onFinish)

        return busboy;
    }

    #handlerFileBytes(filename) {
        async function * handlerData(data) {
            for await (const item of data) {
                const size = item.length;
                // this.#io.to(this.#socketId).emit(ON_UPLOAD_EVENT, size)
                yield item
            }
        }
        return handlerData.bind(this)
    }

    async #onFile(fieldname, file, filename) {
        console.log(filename.filename)
        const saveFileTo = join(__dirname, "../downloads", filename.filename)

        logger.info("Uploading " + saveFileTo)
        await pipelineAsync(
            file,
            this.#handlerFileBytes.apply(this, [filename]),
            createWriteStream(saveFileTo)
        )

        logger.info(`file [${filename}] finished`)
    }
}
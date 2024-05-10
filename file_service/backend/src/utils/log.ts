export const logger = require("pino") ({
    transport: {
        target: "pino-pretty",
        // ignore: "pid, hostname"
    },
});

export const { promisify} = require("util");
export const {pipeline} = require("stream");
export const pipelineAsync = promisify(pipeline);


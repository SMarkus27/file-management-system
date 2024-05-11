import { UploadHandler } from "../uploadHandler";
import { logger, pipelineAsync } from "../utils/log";

const url = require("url");

export class Routes {
  #io;
  constructor(io) {
    this.#io = io;
  }
  async options(request, response) {
    response.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Method": "OPTIONS, POST",
    });
    response.end();
  }

  async post(request, response) {
    const { headers } = request;
    const {
      query: { socketId },
    } = url.parse(request.url, true);
    const redirectTo = headers.origin;

    const uploadHandler = new UploadHandler(this.#io, socketId);
    const onFinish = (request, redirectTo) => () => {
      response.writeHead(303, {
        Connection: "close",
        Location: `${redirectTo}?msg=Files upload with success!`,
      });

      response.end();
    };
    const busboyInstance = uploadHandler.registerEvents(
      headers,
      onFinish(response, redirectTo),
    );

    await pipelineAsync(request, busboyInstance);

    logger.info("Request finished with success!!");
  }
}

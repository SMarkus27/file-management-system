import * as http from "http";
import { Routes } from "./routes/routes";
import { logger } from "./utils/log";
const socket = require("socket.io");

const PORT = 3000;

const handler = (request, response) => {
  const defaultRoute = async (request, response) => response.end("Hello");
  const routes = new Routes(io);
  const chosen = routes[request.method.toLocaleLowerCase()] || defaultRoute;

  return chosen.apply(routes, [request, response]);
};

const server = http.createServer(handler);

const io = socket(server, {
  cors: {
    origin: "*",
    credentials: false,
  },
});

io.on("connection", (socket) => logger.info("someone connected" + socket.id));
const interval = setInterval(() => {
  io.emit("file-uploaded", 5e6);
}, 250);

const startServer = () => {
  // @ts-ignore
  const { address, port } = server.address();

  logger.info(`app running at http://${address}:${port}`);
};

server.listen(PORT, startServer);

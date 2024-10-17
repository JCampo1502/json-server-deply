const jsonServer = require("json-serve");
const server = jsonServer.create();
const router = jsonServer.router("data.json");
const middleWares = jsonServer.defaults();
const port = process.env.PORT || 3001;
server.use(middleWares);
server.use(router);
server.listen(port);

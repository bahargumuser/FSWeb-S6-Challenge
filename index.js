const server = require("./API/server");
require("dotenv").config();

const port = process.env.PORT || 9001;

server.listen(port, () => {
  console.log("dinliyor 9000");
});

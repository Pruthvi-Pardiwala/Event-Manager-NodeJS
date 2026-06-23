const express = require("express");

const server = express();
const serverPort = 9000;

require("./config/db");

server.set("view engine", "ejs");

server.use(express.urlencoded({ extended: true })); 
server.use(express.json());

server.use(express.static("Public"));

server.use("/", require("./routes/eventRoutes"));

server.listen(serverPort, (error) => {
    if (error) {
        console.log(error);
        return;
    }

    console.log(`Server Running On Port ${serverPort}`);
});

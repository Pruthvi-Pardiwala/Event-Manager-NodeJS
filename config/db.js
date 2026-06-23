const mongooseClient = require("mongoose");

mongooseClient.connect("mongodb://localhost:27017/")
.then(() => {
    console.log("Database Connected Successfully");
})
.catch((error) => {
    console.log("Database Connection Error:", error);
});

module.exports = mongooseClient;

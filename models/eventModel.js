const mongooseLib = require("mongoose");
const fileUpload = require("multer");
const nodePath = require("path");

const imageDirectory = "/assets/images";

const eventSchemaDefinition = new mongooseLib.Schema(
{
    titleName: {
        type: String,
        required: true,
    },

    hostName: {
        type: String,
        required: true,
    },

    scheduleDate: {
        type: Date,
        required: true,
    },

    scheduleTime: {
        type: String,
        required: true,
    },

    venue: {
        type: String,
        required: true,
    },

    eventType: {
        type: String,
        required: true,
    },

    entryFee: {
        type: Number,
        required: true,
    },

    seatCapacity: {
        type: Number,
        required: true,
    },

    details: {
        type: String,
        required: true,
    },

    eventStatus: {
        type: String,
        enum: ["Active", "InActive"],
        default: "Active",
    },

    coverImage: {
        type: String,
        required: true,
    },
},
{
    timestamps: true,
}
);

const diskStorage = fileUpload.diskStorage({
    destination: function (req, file, cb) {
        cb(null, nodePath.join(__dirname, "..", "Public", "assets", "images"));
    },

    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

eventSchemaDefinition.statics.uploadImage = fileUpload({
    storage: diskStorage,
}).single("coverImage");

eventSchemaDefinition.statics.imagePath = imageDirectory;

const EventEntry = mongooseLib.model("Event", eventSchemaDefinition);

module.exports = EventEntry;

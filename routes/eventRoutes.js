const expressLib = require("express");
const router = expressLib.Router();

const eventController = require("../controller/controller");

const uploadHandler = require("multer");
const filePath = require("path");

const uploadStorage = uploadHandler.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/assets/images");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + filePath.extname(file.originalname));
    }
});

const uploadMiddleware = uploadHandler({ storage: uploadStorage });

router.get("/", eventController.renderHomePage);

router.get("/contact", eventController.renderContactPage);

router.get("/add-event", eventController.renderAddEventPage);
router.post("/insertEvent", uploadMiddleware.single("coverImage"), eventController.createEvent);

router.get("/view-event", eventController.renderViewEventPage);

router.get("/edit-event/:id", eventController.renderEditEventPage);

router.post("/update-event/:id", uploadMiddleware.single("coverImage"), eventController.modifyEvent);

router.get("/delete-event/:id", eventController.removeEvent);

module.exports = router;

const EventEntry = require("../models/eventModel");

module.exports.renderHomePage = async (req, res) => {
    try {
        let eventList = await EventEntry.find({});
        return res.render("index", { allEvents: eventList });
    } catch (error) {
        console.log(error);
        return res.send(error);
    }
};

module.exports.renderContactPage = (req, res) => {
    return res.render("contact");
};

module.exports.renderAddEventPage = (req, res) => {
    return res.render("addEvent");
};

module.exports.renderViewEventPage = async (req, res) => {
    try {
        let eventList = await EventEntry.find({});
        return res.render("viewEvent", { allEvents: eventList });
    } catch (error) {
        console.log(error);
        return res.send(error);
    }
};

module.exports.renderEditEventPage = async (req, res) => {
    try {
        let eventDetails = await EventEntry.findById(req.params.id);
        return res.render("editEvent", { event: eventDetails });
    } catch (error) {
        console.log(error);
        return res.redirect("back");
    }
};

module.exports.createEvent = async (req, res) => {
    try {
        let uploadedImage = "";

        if (req.file) {
            uploadedImage = req.file.filename;
        }

        await EventEntry.create({
            titleName: req.body.titleName,
            hostName: req.body.hostName,
            scheduleDate: req.body.scheduleDate,
            scheduleTime: req.body.scheduleTime,
            venue: req.body.venue,
            eventType: req.body.eventType,
            entryFee: req.body.entryFee,
            seatCapacity: req.body.seatCapacity,
            details: req.body.details,
            eventStatus: req.body.eventStatus,
            coverImage: uploadedImage,
        });

        return res.redirect("/view-event");
    } catch (error) {
        console.log(error);
        return res.send(error);
    }
};

module.exports.removeEvent = async (req, res) => {
    try {
        await EventEntry.findByIdAndDelete(req.params.id);
        return res.redirect("/view-event");
    } catch (error) {
        console.log(error);
        return res.send(error);
    }
};

module.exports.modifyEvent = async (req, res) => {
    try {
        console.log("BODY:", req.body);
        console.log("FILE:", req.file);

        const modifiedData = { ...req.body };

        if (req.file) {
            modifiedData.coverImage = req.file.filename;
        }

        await EventEntry.findByIdAndUpdate(req.params.id, modifiedData, { new: true });

        return res.redirect("/view-event");
    } catch (error) {
        console.log(error);
        return res.send(error);
    }
};

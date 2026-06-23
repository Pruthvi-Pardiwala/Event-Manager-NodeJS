# 🎉 Event Management System

A modern and responsive **Event Management System** ("Stubhouse") built using **Node.js, Express.js, MongoDB Atlas, EJS, and Multer**, with a custom hand-built UI (no CSS framework).

This application allows administrators to create, manage, update, and delete events while displaying upcoming events on the public website.

---

## 🚀 Features

### Admin Features

✅ Add New Events  
✅ Upload Event Images  
✅ Edit Event Details  
✅ Delete Events  
✅ Manage Event Status (Active / Inactive)  
✅ View All Events in Dashboard

### Public Features

✅ Display Upcoming Events  
✅ Event Cards with Images  
✅ Event Date & Time Information  
✅ Organizer Details  
✅ Event Category  
✅ Ticket Pricing  
✅ Available Seats

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3 (custom theme, no framework)
- EJS

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### File Upload
- Multer

---

## 📂 Project Structure

```bash
Event-Management/
│
├── config/
│   └── db.js
│
├── models/
│   └── Event.js
│
├── controllers/
│   └── eventController.js
│
├── routes/
│   └── eventRoutes.js
│
├── public/
│   ├── css/
│   ├── images/
│   └── uploads/
│
├── views/
│   │── header.ejs
│   │── footer.ejs
│   │
│   ├── index.ejs
│   ├── add-event.ejs
│   ├── edit-event.ejs
│   └── view-event.ejs
│
├── .env
├── app.js
├── package.json
└── README.md
```

---



---

# 📸 Application Screenshots

## 🏠 Homepage (Before Events Added)

Shows the Upcoming Events section when no events are available.



---

## ➕ Create New Event

Admin panel page used for creating events and uploading event images.



---

## 📋 Event view-table (No Data)

Displays an empty table when there are no events available.


---

## 📊 Event table

Admin dashboard displaying all events with Edit and Delete actions.

### Features

- Event Image
- Event Name
- Organizer
- Date & Time
- Location
- Category
- Price
- Seats
- Status
- Edit / Delete Actions



---

## 🎫 Public Event Listing

Events displayed on the website for visitors.

### Event Card Information

- Event Poster
- Event Name
- Organizer
- Date
- Time
- Ticket Price


## MONGODB DataStorage


---
# 📌 Sample Event Data

```json
{
  "titleName": "KHI KHI COMEDY SHOW",
  "hostName": "KUKDI CHOPDi",
  "scheduleDate": "2026-06-14",
  "scheduleTime": "18:00",
  "venue": "Kukdi Chopdi : Surat",
  "eventType": "Other",
  "entryFee": 149,
  "seatCapacity": 1000,
  "eventStatus": "Active"
}
```

---

# 🌟 Future Enhancements

- User Authentication
- Event Booking System
- Online Payment Integration
- Seat Reservation System
- Search & Filter Events
- Event Categories Management
- Cloudinary Image Upload
- User Dashboard
- Ticket Generation

---

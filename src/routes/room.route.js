const express = require("express");
const route = express.Router();
const {
    handleNewRoom,
    handleGetAllRooms,
    handleGetRoom
} = require("../controllers/room.controller");

route.post("/add", handleNewRoom);
route.post("/all", handleGetAllRooms);
route.post("/:id", handleGetRoom);

module.exports = route;
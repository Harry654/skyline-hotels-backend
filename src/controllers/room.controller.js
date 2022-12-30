const RoomModel = require("../model/room.model");

const handleNewRoom = async () => {
    try{
        let newRoom = new RoomModel(req.body);
        newRoom = await newRoom.save();
        return res.status(201).json({
            message: "Room added successfully",
            success: true,
            newRoom,
            statusCode: 201
        });
    }catch(error){
        // return console.log(error)
        res.status(500).json({
            message: "Room not added",
            success: false,
            error,
            statusCode: 500
        });
    }
}

const handleGetAllRooms = async () => {
    try{
        const { limit } = req.query;
        const rooms = RoomModel.find().limit(limit);
        return res.status(200).json({
            message: "Rooms retrieved successfully",
            success: true,
            rooms,
            statusCode: 200
        });
    }catch(error){
        res.status(500).json({
            message: "Something went wrong",
            success: false,
            error,
            statusCode: 500
        });
    }
}

const handleGetRoom = async () => {
    try{
        const { id: room_id } = req.params;
        const room = RoomModel.find({ _id: room_id });
        return res.status(200).json({
            message: "Room retrieved successfully",
            success: true,
            room,
            statusCode: 200
        });
    }catch(error){
        res.status(500).json({
            message: "Something went wrong",
            success: false,
            error,
            statusCode: 500
        });
    }
}

module.exports = {
    handleNewRoom,
    handleGetAllRooms,
    handleGetRoom
};
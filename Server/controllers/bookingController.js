const bookingModel = require("../models/bookingModel");

exports.getBooking=async (req, res) =>
{
    try {
        const bookingData = await bookingModel.find({bookingId: req.params.id})

        res.status(200).json({
            status: "Success",
            data: bookingData
        });
    } catch(error) {
        console.log(error);
        res.status(400).json({
            status: "Failed 😥",
            error: error
        });
    }
}

exports.getUserBookings=async (req, res) =>
{
    try {
        const bookingsData = await bookingModel.find({userId: req.params.id})

        res.status(200).json({
            status: `Get all bookings by user ${req.params.userId} done`,
            data: bookingsData
        })
    }
    catch(error) {
        console.log(error)
        res.status(402).json({
            status: "Error",
            error: {error}
        });
    }
}

exports.getAllBookings=async (req, res) =>
{
    try {
        var bookings = await bookingModel.find({}).sort()

        res.status(200).json({
            status: "Get all bookings done",
            data: bookings
        })
    }
    catch(error) {
        console.log(error)
        res.status(402).json({
            status: "Error",
            error: {error}
        });
    }
}

exports.bookService=async (req, res) =>
{
    const data=req.body
    try {
        const newBooking=new bookingModel(data);
        await newBooking.save()

        res.status(200).json({
            message: "Booking added successfully 😌",
            data: data
        })
    } catch(error) {
        console.log(error);
        res.status(400).json({
            status: "failed",
            message: error
        });
    }
}

exports.updateSericeStatus=async (req, res) =>
{
    const data=req.body
    try {

        await bookingModel.updateOne({bookingId: req.params.id}, data, {upsert: true})

        res.status(200).json({
            message: "Booking data updated successfully 😌",
            data: data
        })
    } catch(error) {
        console.log(error);
        res.status(400).json({
            status: "failed",
            message: error
        });
    }
}
import mongoose from "mongoose"
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3,"first name must have at least 3 characters "],
        maxLength: [30, "first name can not have more than 30 characters"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3,"last name must have at least 3 characters "],
        maxLength: [30, "last name can not have more than 30 characters"],
    },
    email: {
        type: String,
        required: true,
        validator : [validator.isEmail,"provide a valid email!"],
    },
    phone: {
        type: String,
        required: true,
        minLength: [10,"Phone no. must contain only 10 digits"],
        maxLength: [10, "Phone no. must contain only 10 digits"],
    },
    time: {
        type: String,
        required: true,
    },
    date:{
        type: String,
        required: true,
    }
})

export const Reservation = mongoose.model("Reservation", reservationSchema)
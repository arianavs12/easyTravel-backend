const { Schema, model } = require("mongoose");

const tripSchema = new Schema(
    {
    destination: {
        type: String,
        required: true
    },
    typeOfTransport: {
            type:String,
            required: true,
            enum: ["Aereo", "Terrestre"]
    },
    typeOfLodjing: {
        type: String,
        required: true,
        enum: ["Hotel", "Airbnb", "Hostal", "No Charge"]
    },
    budget: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 300

    },
},
{
    timestamps: true
  }


);


const Trip = model("Trip", tripSchema);

module.exports = Trip;
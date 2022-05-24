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
        enum: ["Hotel", "Airbnb", "Hostal", "Sin cargo por hospedaje"]
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
    traveler: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
    }]
},
{
    timestamps: true
  }


);


const Trip = model("Trip", tripSchema);

module.exports = Trip;
const { Schema, model } = require("mongoose");

const tripSchema = new Schema(
    {
    destination: {
        type: String,
    },
    typeOfTransport: {
            type:String,
    },
    typeOfLodjing: {
        type: String,
    },
    budget: {
        type: Number,
    },
    description: {
        type: String,

    },
},
{
    timestamps: true
  }


);


const Trip = model("Trip", tripSchema);

module.exports = Trip;
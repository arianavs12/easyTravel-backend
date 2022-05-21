const { Schema, model } = require("mongoose");

const packageSchema = new Schema(
    {
    origin: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    departureDate: {
        type: Date,
        //required: true
    },
    returnDate: {
        type: Date,
        //required: true
    },
    numOfPax: {
        type: Number,
        required: true
    },
    traveler: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},
{
    timestamps: true
  }


);

const Package = model("Package", packageSchema);

module.exports = Package;
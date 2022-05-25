const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
    {
    title: {
        type: String,
        require: true

    },
    description: {
        type: String,
        required: true,
        maxlength: 500

    },
    traveler: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
},
{
    timestamps: true
  }


);

const Review = model("Review", reviewSchema);

module.exports = Review;
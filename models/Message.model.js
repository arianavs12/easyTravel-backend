const { Schema, model } = require("mongoose");

const messageSchema = new Schema(
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

const Message = model("Message", messageSchema);

module.exports = Message;
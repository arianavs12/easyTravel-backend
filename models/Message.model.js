const { Schema, model } = require("mongoose");

const messageSchema = new Schema(
    {
    title: {
        type: String,
        require: true

    },
    body: {
        type: String,
        required: true,
        maxlength: 500

    },
    traveler: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    package: {
        type: Schema.Types.ObjectId,
        ref: 'Package'
    }
},
{
    timestamps: true
  }


);

const Message = model("Message", messageSchema);

module.exports = Message;
const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username:{
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    email: {
      type: String,
      required: true,
      unique: true,
      //match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.']
    },
    phoneNumber: {
      type: Number,
      minlength: 10,
      maxlength: 10
  },
  trip: [{
    type: Schema.Types.ObjectId,
    ref: 'Trip'
  }],

  package: [{
    type: Schema.Types.ObjectId,
    ref: 'Package'
  }],
},
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;

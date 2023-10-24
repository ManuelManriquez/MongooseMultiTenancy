"use strict";

const mongoose = use("mongoose");
const { Mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = userSchema;

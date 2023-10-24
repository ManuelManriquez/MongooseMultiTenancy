"use strict";

const mongoose = use("mongoose");
const { Mongoose } = require("mongoose");
const User = use("App/Models/User");

const saleSchema = new mongoose.Schema(
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

module.exports = saleSchema;

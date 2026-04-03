const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ["Billing", "Technical", "Account", "Feature Request", "Other"],
    default: "Other"
  },
  priority: {
    type: String,
    enum: ["P0", "P1", "P2", "P3"],
    default: "P2"
  },
  keywords: {
    type: [String],
    default: []
  },
  urgency: {
    type: Boolean,
    default: false
  },
  confidence: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Ticket", ticketSchema);
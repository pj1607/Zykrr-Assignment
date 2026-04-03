const Ticket = require('../models/Ticket');
const analyzeTicket = require('../analyzer/ticketAnalyzer');

exports.createTicket = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const analysis = analyzeTicket(message);

    const ticket = new Ticket({
      message,
      ...analysis
    });

    const savedTicket = await ticket.save();

    res.status(201).json(savedTicket);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find()
      .sort({ createdAt: -1 });

    res.status(200).json(tickets);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
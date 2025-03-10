const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// Insert Expense
router.post('/expenses', async (req, res) => {
    const { description, amount } = req.body;
    const expense = new Expense({ description, amount });
    await expense.save();
    res.status(201).send(expense);
});

// Update Expense
router.put('/expenses/:id', async (req, res) => {
    const { description, amount } = req.body;
    const expense = await Expense.findByIdAndUpdate(req.params.id, { description, amount }, { new: true });
    res.send(expense);
});

// Delete Expense
router.delete('/expenses/:id', async (req, res) => {
    await Expense.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

// Get All Expenses
router.get('/expenses', async (req, res) => {
    const expenses = await Expense.find();
    res.send(expenses);
});

module.exports = router;

import React, { useState } from 'react';
import axios from 'axios';

function ExpenseForm() {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/expenses', { description, amount });
            setDescription('');
            setAmount('');
        } catch (error) {
            console.error('Error adding expense:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder="Description" 
                required 
            />
            <input 
                type="number" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
                placeholder="Amount" 
                required 
            />
            <button type="submit">Add Expense</button>
        </form>
    );
}

export default ExpenseForm;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ExpenseList() {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/expenses');
                setExpenses(response.data);
            } catch (error) {
                console.error('Error fetching expenses:', error);
            }
        };
        fetchExpenses();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/expenses/${id}`);
            setExpenses(expenses.filter(expense => expense._id !== id));
        } catch (error) {
            console.error('Error deleting expense:', error);
        }
    };

    const handleUpdate = async (id) => {
        const description = prompt('Enter new description:');
        const amount = prompt('Enter new amount:');
        try {
            await axios.put(`http://localhost:5000/api/expenses/${id}`, { description, amount });
            setExpenses(expenses.map(expense => expense._id === id ? { ...expense, description, amount } : expense));
        } catch (error) {
            console.error('Error updating expense:', error);
        }
    };

    return (
        <ul>
            {expenses.map(expense => (
                <li key={expense._id}>
                    {expense.description} - {expense.amount}
                    <button onClick={() => handleUpdate(expense._id)}>Update</button>
                    <button onClick={() => handleDelete(expense._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default ExpenseList;

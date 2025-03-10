import React from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
    return (
        <div className="App">
            <h1>Personal Finance Manager</h1>
            <ExpenseForm />
            <ExpenseList />
        </div>
    );
}

export default App;

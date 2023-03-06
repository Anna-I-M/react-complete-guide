import React, { useState } from 'react';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
  
  const Expenses = (props) => {
    const [chosenYear, setFilteredYear] = useState("2020");
    
      const chosenExpensesYear = (enteredExpensesyear) => {
        setFilteredYear(enteredExpensesyear);
      };    

      const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === chosenYear;
      });

    return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={chosenYear} onChangeFilterYear={chosenExpensesYear}/>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
    );
  }
  
  export default Expenses
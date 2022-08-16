import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  // eslint-disable-next-line no-undef
  const [filteredYear, setFilteredYear] = useState('2022');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    /* console.log(selectedYear); */
  };
  const filteredItems = props.items.filter(x=>x.date.getFullYear().toString()===filteredYear);
/*   let expenseCheck = <p>No Items Found</p>;
  if(filteredItems.length > 0){
    expenseCheck = filteredItems.map((expense=>(
        <ExpenseItem 
        key = {expense.id}
        title = {expense.title}
        amount = {expense.amount}
        date = {expense.date}
        />
    )));
  } */
  
  return (
    <Card className="expenses">
      <ExpenseFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler}>
      </ExpenseFilter>
    {/* {expenseCheck} */}
     {/*  {filteredItems.length ===0 ? (<p>No Items Found</p>
     ):(
        filteredItems.map((expense=>
          <ExpenseItem>
            key = {expense.id}
            title = {expense.title}
            amount = {expense.amount}
            date = {expense.date}
          </ExpenseItem>))
      )} */}
      <ExpensesChart expenses = {filteredItems}></ExpensesChart>
      <ExpenseList items={filteredItems}></ExpenseList>
    </Card>
  );
}
// Check ıtem list by selected year and list item if exist 
//if not exist print No Items Found parag
// components can be add like js variables
export default Expenses;

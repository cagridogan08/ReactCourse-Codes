/* import ExpenseItem from "./components/ExpenseItem"; */
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
const App = () => {
  /* let _expenses = [
    {
      id:"e1",
      title: "Car Insurance",
      amount: 500,
      date: new Date(2022, 5, 24),
    },
    {
      id:"e2",
      title: "Toilet Paper",
      amount: 12,
      date: new Date(2022, 6, 24),
    },
  ]; */
  // eslint-disable-next-line no-undef
 /*  const [array,setExpenses] = useState(expenses);
  const addExpenseHandler=expense=>{
    
    setExpenses(array => [...array, expense]);
    //expenses.push(expense);
    console.log(array);
    //console.log("Received expense:",expense);
  }; */
  let _expenses =[];
  const [expenses,setExpenses] = useState(_expenses);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses,expense ];
    });
  };
  return (
    <div>
      <NewExpense OnAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}  ></Expenses>
    </div>
  );
};

export default App;

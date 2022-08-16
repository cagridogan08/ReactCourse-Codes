/* import ExpenseItem from "./components/ExpenseItem"; */
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
import { Deneme } from "./components/NewExpense/Deneme";
const App = () => {
  let _expenses = [
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
      date: new Date(2019, 6, 24),
    },  
  ];
  let currentCount = 0;
  const [expenses, setExpenses] = useState(_expenses);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense,...prevExpenses];
    });
  };
  const [counter, incrementValue] = useState(currentCount);
  const incrementCounter = () => {
    incrementValue(counter + 1);
  };
  return (
      <div>
        <NewExpense OnAddExpense={addExpenseHandler}></NewExpense>
        <Expenses items={expenses}></Expenses>
        <div>
          <h1>Counter</h1>
          <button onClick={incrementCounter}>Increment</button>
          <p aria-live="polite">
            Current count: <strong>{counter}</strong>
          </p>
        </div>
        <Deneme></Deneme>
      </div>
      
  );
};
//  JSX expressions must have one parent element error -> Birden fazla component dönmesi nedeni ile verilen hatadır.
//  Çözüm olarak retun içerisinide genel bir <div> vs nesnesi içerisine alınması.
export default App;

/* import ExpenseItem from "./components/ExpenseItem"; */
import Expenses from "./components/Expenses/Expenses";
const App = () => {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 500,
      date: new Date(2022, 5, 24),
    },
    {
      title: "Toilet Paper",
      amount: 12,
      date: new Date(2022, 6, 24),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;

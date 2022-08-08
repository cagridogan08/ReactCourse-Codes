import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense =(props)=>{

    const saveExpenseDataHandler=inputExpenseData=>{
        const expenseData={
            ...inputExpenseData,
            id:Math.random().toString()
        };
        //console.log(expenseData);
        props.OnAddExpense(expenseData);
    }
    return <div className="new-expense">
        <ExpenseForm saveExpenseDataHandler={saveExpenseDataHandler}/>
    </div>
};


export default NewExpense;
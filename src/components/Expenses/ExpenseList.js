import React from "react";
import ExpenseItem from "./ExpenseItem";


const ExpenseList=(props)=>{

    if(props.items.length===0){
        return(
            <p>
                No Expense Found
            </p>
        )
    }
   

return (
    <div className="expense-list">
        {props.items.map((expense)=>
            <ExpenseItem 
            key = {expense.id}
            title = {expense.title}
            amount = {expense.amount}
            date = {expense.date}
            />
        )}
    </div>
);

}

export default ExpenseList;



import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

const NewExpense =(props)=>{

    const saveExpenseDataHandler=inputExpenseData=>{
        const expenseData={
            ...inputExpenseData,
            id:Math.random().toString()
        };
        //console.log(expenseData);
        props.OnAddExpense(expenseData);
        setEditing(false);
    }
    const [isEditing,setEditing] = useState(false);
    const startEditingHandler=()=>{
        setEditing(true);
    }
    const stopEditing=()=>{
        setEditing(false);
    }
    return <div className="new-expense">
        
        {!isEditing&& <button onClick={startEditingHandler}>Hide/Show Form</button>}
        {isEditing&&< ExpenseForm saveExpenseDataHandler={saveExpenseDataHandler} onCancel={stopEditing}/>}
        </div>
};


export default NewExpense;
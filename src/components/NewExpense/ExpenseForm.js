import React from "react";
import { useState } from "react";
import "./ExpenseForm.css"
const ExpenseForm=(props)=>{
    const [title,setTitle]=useState('');
    const [date,setDate] = useState(''); // --> Seperate states
    const [amount,setAmount] = useState('');

   /*  const [userInput,setUserInput] =useState({  //->One State 
        title:'',
        amount:'',
        date:''
    }) */

    const titleChangedHandler = event=>{
        /* setUserInput({
            ...userInput,
            title:event.target.value,
        }) */
        setTitle(event.target.value);
        /* setUserInput((prevState)=>{  --> Previous state'de kalan verileri override ederek update yap
            return {...prevState,title:event.target.value}
        }); */
    }
    
    const amountChangedHandler=event=>{
      /*   setUserInput({
            ...userInput,
            amount:event.target.value,
        }) */
        setAmount(event.target.value);
    }
    
    const dateChangedHandler=event=>{
       /*  setUserInput({
            ...userInput,
            date:event.target.value,
        }) */
        setDate(event.target.value);
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        const ExpenseData={
            title:title,
            amount:amount,
            date:new Date(date),
        };
        props.saveExpenseDataHandler(ExpenseData);
        setTitle('');
        setAmount('');
        setDate('');
    };
    return (<form onSubmit={submitHandler}  >
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={title} onChange={titleChangedHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number'min="0.01" step="0.01" value={amount} onChange={amountChangedHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2023-12-31" value={date} onChange={dateChangedHandler}/>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>
    );
};

export default ExpenseForm;
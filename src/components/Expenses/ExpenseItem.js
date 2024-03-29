import React,{ useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {

  const [title,setTitle] =useState(props.title);

  
  //Button clich handler//
 /*  const clickHandler=()=>{
    setTitle("Güncellendi!");
  }; */

  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date}></ExpenseDate>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={()=>setTitle("Updated")}>Change Title</button>
      
    </Card>
  );
}



export default ExpenseItem;

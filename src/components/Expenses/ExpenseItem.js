import React from "react";

import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const [newTitle, setNewTitle] = useState("");
  // // title contains the titles and setTitle will be used to update the titile. aise hi use karte h useState ko
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setTitle(newTitle);
  // };

  // //input given by the user is handled in this way.
  // const changeHandler = (event) => {
  //   setNewTitle(event.target.value);
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={new Date(props.date)} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs. {props.amount}</div>
      </div>

      {/* <input type="text" value={newTitle} onChange={changeHandler} />
      <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};

export default ExpenseItem;

// NOTES:
// 1. useState is used to keep track of strings, numbers, arrays etc
// it allows us to track state in a function component. state generally refers to data or properties that need to be tracking in an application
// use state use karne ka fix pattern h, through array destructuring kinda
// [color, setColor] = useState("");
// ek paramter hoti h vo value jo change wange karni h aur dusra paramerter ek function h, setXXX()
// agar mujhe value change krni hui to iske through hi karenge.

// 2. taking input from the user, for that i created the text box.
// i want that input given by the user should be the name of expense item now.
// for that whatever input the user will enter, i will collect it in "value", and said this is my newTitle
// now mere pass value aa chuki h ab bs ye value ko set karna h title ki jagah
// for that we will use an eventHandler ofcourse, which is "onChange" (remember)
// onChange will call a function changeHandler jiska kaam h newTitle mein value set kar dena
// dekho value ne sirf retrieve kiya h user input se, ab use set karne ke liye newTitle mein we will have to use setNewTitle
// so now finally newTitle has the value given by user

// 3. Next is when i press that button "change Title", it should change the current title to newTitle
// so again we will have to use an event handler, which is "onClick" (button click karne pe)
// onClick will call a function "clickHandler" jiska kaam h title mein newTitle set kardena.
// title is the current title jo maine useState() ki help se access kar liya h. ab isme agar koi change karna h to i will have to use setTitle
// aur setTitle kya karega?.....simple title mein newTitle set kar dega so do this....setTitle(newTitle);

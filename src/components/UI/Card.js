// to ab kya ho rha h ki main ye Card component ko
// ExpenseDate component ke saath nest kr rha hu in the ExpenseItem.js file
// initially there was a div jisme ye ExpenseDate component laga hua tha and uss div pe bhi "expense-item" class di thi
// to maine bs uss div ko Card component se change kr diya
// lekin isse kya hoga ki Card component pe jo class lagi h..'card' class vo 'expense-item' ko override kr rhi h uske saath mil ke kaam karne ki bajay
// so how do we apply both the classes on the maal that is present inside the Card component
// so for that we will again use the 'props' object.
// we will combine both the classes props.className mein vo 'expense-item' class aa jaega jo overwrite ho rha tha
// and we will combine it with the 'card' class of Card component

// so basically kya ho rha h ki <Card className="expense-item"> aisa kiya maine ExpenseItem.js file mein
// to Card comp ke andar maine 'expense-item' class di h. to use access karne ke liye we use
// props.className

import React from "react";

import "./Card.css";

const Card = (props) => {
  // aisa karte time class ke baad space dena bhot zaruri h
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;

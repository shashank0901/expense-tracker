import React, { useState, useEffect } from "react";

import NewExpense from "./components/NewExpense/NewExpense";

import Expenses from "./components/Expenses/Expenses";

import { useAuth0 } from "@auth0/auth0-react";

import "./App.css";

let DUMMY_EXPENSE = [];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  // const { logout } = useAuth0();
  function fetchData() {
    fetch("http://localhost:2000/expense")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setExpenses(data);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const addExpenseHandler = (expense) => {
    fetch("http://localhost:2000/expense", {
      method: "POST",
      body: JSON.stringify(expense),
      headers: {
        "content-Type": "application/json",
      },
    }).then((response) => {
      fetchData();
    });
  };

  return (
    <div>
      <div className="header">
        {isAuthenticated && (
          // <div className="greet">
          <p className="greet"> welcome {user.name} </p>
          // </div>
        )}
        {isAuthenticated ? (
          <button
            className="logout"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        ) : (
          <button className="login" onClick={() => loginWithRedirect()}>
            Log In
          </button>
        )}
      </div>
      <h2>Expense Tracker App</h2>

      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};
export default App;

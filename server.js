const express = require("express");
const mongoose = require("mongoose");

const expense = require("./models/expenseModel"); //imported all expense
const app = express();

const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);
// this is a middleware, which allowed us to perform CRUD operations in the database, but only using json objects
app.use(express.json());

//this is also a middleware, which does the same but the operations may not be done in json object only, we can also simply pass the key value pair in postman to do what we want
app.use(express.urlencoded({ extended: false }));

//routes - maine app.listen mein pehle jake bol diya ki port 3000 pe listen karo. but i want to actually go in the browser at port 3000 and see so for that we have this app.get()

// get all expenses
app.get("/expense", async (req, res) => {
  try {
    const exp = await expense.find({}); //get all expenses
    res.status(200).json(exp);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get specific expense with filter = id
app.get("/expense/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const exp = await expense.findById(id); //get specific expense for that id
    res.status(200).json(exp);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//update or edit data in database
app.put("/expense/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const exp = await expense.findByIdAndUpdate(id, req.body);

    //if we dont find any exp with that id in the database
    if (!exp) {
      return res
        .status(404)
        .json({ message: `cannot find any expense with ID ${id}` });
    }
    const updatedExpense = await expense.findById(id);
    res.status(200).json(updatedExpense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// post/insert new data in the database
app.post("/expense", async (req, res) => {
  try {
    const exp = await expense.create(req.body);
    res.status(200).json(exp);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//delete an expense from the database
app.delete("/expense/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const exp = await expense.findByIdAndDelete(id);

    if (!exp) {
      return res
        .status(404)
        .json({ message: `cannot find any expense with ID ${id}` });
    }
    res.status(200).json(exp);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://shashank:12345@expenseapi.my8qtrd.mongodb.net/ExpenseApi?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to mongoDB");
    app.listen(2000, () => {
      console.log(`Expense API app is running on port 2000`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

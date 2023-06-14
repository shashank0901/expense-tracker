const mongoose = require("mongoose");

// mera object kuch iss type ka h,
// expenses = [
//     {
//         id: 'e1',
//         title: 'school fee',
//         amount: 250,
//         date: new Date(2023, 5, 12)
//     }
// ]
// so in the expense schema, i will have to define these 4 parameters, id, title, amount, and date

const expenseSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const expense = mongoose.model("expense", expenseSchema);

module.exports = expense;

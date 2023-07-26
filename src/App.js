import "./App.css";
import Header from "./Components/Header";
import Add from "./Components/Add";
import Balance from "./Components/Balance";
import Expenses from "./Components/Expense";
import Footer from "./Components/Footer";
import { useState } from "react";
function App() {
  const [balance,setBalance] = useState(0)
  const [expenses,setExpenses] = useState([
   
  ])

  function addNewExpense(amount,description){
    //code
    let newId 
    if(expenses.length > 0){
      newId = expenses[expenses.length -1].id+1
    }else{
      newId = 1
    }
   const updatedExpense = expenses.concat({id:newId,amount:amount,description:description})
   setExpenses(updatedExpense);
   setBalance(balance + Number(amount))
  }
  
  function handleRemove(id) {
    const removedExpense = expenses.find((expense) => expense.id === id);
    setExpenses(expenses.filter((expense) => expense.id !== id));
    setBalance(balance - Number(removedExpense.amount));
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div>
          <Balance total={balance}/>
          <Add handleOnClick = {addNewExpense}/>
          {expenses.map((expense)=> <Expenses data={expense} handleRemove={handleRemove}/>)}
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

import styles from "./App.module.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { useState } from "react";
import Cash from "./Components/Cash/Cash";
const App = () => {
  const [billAmount, setBillAmount] = useState("");
  const [cashGiven, setCashGiven] = useState("");

  const setValue = (bill, cash) => {
    setBillAmount(bill);
    setCashGiven(cash);
  };

  return (
    <div className={styles.parent}>
    <h1>Cash Register</h1>
      <div className={styles.container}>
        <Navbar />
        <Home setValue={setValue} />
        <Cash bill={billAmount} cash={cashGiven} />
      </div>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import styles from "./Home.module.css";
import Bounce from "react-reveal/Bounce";

const Home = ({ setValue }) => {
  const [billAmount, setBillAmount] = useState("");
  const [cashGiven, setCashGiven] = useState("");

  const handleBill = (e) => {
    setBillAmount(e.target.value);
  };

  const handleCash = (e) => {
    setCashGiven(e.target.value);
  };

  const calculateChange = (e) => {
    e.preventDefault();

    if (parseInt(billAmount) > parseInt(cashGiven)) {
      alert("Cash Given is Less Than Bill Amount!");
    } else setValue(billAmount, cashGiven);
  };

  return (
    
      <form className={styles.container}>
      <Bounce left>
      <input
          type="number"
          value={billAmount}
          onChange={handleBill}
          required
          min="0"
          placeholder="Enter Bill Amount"
        />
      </Bounce>
       
        {billAmount && (
          <Bounce left>
            <input
              type="number"
              value={cashGiven}
              onChange={handleCash}
              required
              min={billAmount}
              placeholder="Enter Cash Received"
            />
          </Bounce>
        )}
        {billAmount && cashGiven && (
          <Bounce left>
            <button onClick={calculateChange}>Submit</button>
          </Bounce>
        )}
      </form>
    
  );
};

export default Home;

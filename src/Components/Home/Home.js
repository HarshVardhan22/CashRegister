import React, { useState } from "react";
import styles from "./Home.module.css";
import HeadShake from "react-reveal/HeadShake";

const Home = ({setValue}) => {
  const [billAmount, setBillAmount] = useState();
  const [cashGiven, setCashGiven] = useState();



  const handleBill = (e) => {
    setBillAmount(e.target.value);
  };

  const handleCash = (e) => {
    setCashGiven(e.target.value);
  };

  const calculateChange = (e) => {
      e.preventDefault();
    setValue(billAmount,cashGiven)
  };

  return (
    <div className={styles.container}>
      <input
        type="number"
        value={billAmount}
        onChange={handleBill}
        required
        min="0"
        placeholder="Enter Bill Amount"
      />
      {billAmount && (
          <HeadShake>
          <input
          type="number"
          value={cashGiven}
          onChange={handleCash}
          required
          min="0"
          placeholder="Enter Cash Received"
        />
          </HeadShake>
       
      )}
      {billAmount && cashGiven && (
          <HeadShake>
          <button onClick={calculateChange}>Submit</button>
          </HeadShake>
      
      )}
    </div>
  );
};

export default Home;

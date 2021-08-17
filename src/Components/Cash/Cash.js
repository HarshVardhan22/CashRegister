import React, { useState, useEffect } from "react";
import styles from "./Cash.module.css";
import Fade from "react-reveal/Fade";
//, one ,five,ten,twenty,hundred,fiveHundred,twoThousand

const Cash = ({ bill=0, cash=0 }) => {
  // const [billAmount,setBillAmount] = useState (bill);
  // const [cashGiven,setCashGiven] = useState (cash);
  const [five, setFive] = useState(0);
  const [one, setOne] = useState(0);
  const [ten, setTen] = useState(0);
  const [twenty, setTwenty] = useState(0);
  const [hundred, setHundred] = useState(0);
  const [fiveHundred, setFiveHundred] = useState(0);
  const [twoThousand, setTwoThousand] = useState(0);

  useEffect(() => {
    // setBillAmount(bill)
    // setCashGiven(cash)
    calculateChange();
  }, [bill,cash])

  const calculateChange = () => {
    setFive(0);
    setOne(0);
    setTen(0);
    setTwenty(0);
    setHundred(0);
    setFiveHundred(0);
    setTwoThousand(0);

   
    let changeCash = cash - bill;
    console.log(changeCash)
   
    while (changeCash >= 2000) {
      setTwoThousand((twoThousand) => twoThousand + 1);
      changeCash -= 2000;
    }
    while (changeCash >= 500) {
      setFiveHundred((fiveHundred) => fiveHundred + 1);
      changeCash -= 500;
    }

    while (changeCash >= 100) {
      setHundred((hundred) => hundred + 1);
      changeCash -= 100;
    }
    while (changeCash >= 20) {
      setTwenty((twenty) => twenty + 1);
      changeCash -= 20;
    }
    while (changeCash >= 10) {
      setTen((ten) => ten + 1);
      changeCash -= 10;
    }
    while (changeCash >= 5) {
      setFive((five) => five + 1);
      changeCash -= 5;
    }
    while (changeCash > 0) {
      setOne((one) => one + 1);
      changeCash -= 1;
    }

  };
  

  return (
    <div className={styles.container}>
      <Fade right  >
        <h2>Bill Amount : {bill}</h2>
        <h2>Cash Recieved : {cash}</h2>
        <h3>2000: {twoThousand}</h3>
        <h3>500: {fiveHundred}</h3>
        <h3>100: {hundred}</h3>
        <h3>20: {twenty}</h3>
        <h3>10: {ten}</h3>
        <h3>5: {five}</h3>
        <h3>1: {one}</h3>
      </Fade>
    </div>
  );
};

export default Cash;

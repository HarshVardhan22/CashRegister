import React, { useState, useEffect } from "react";
import styles from "./Cash.module.css";
import Fade from "react-reveal/Fade";
//, one ,five,ten,twenty,hundred,fiveHundred,twoThousand

const Cash = ({ bill = 0, cash = 0 }) => {
  const [five, setFive] = useState(0);
  const [one, setOne] = useState(0);
  const [ten, setTen] = useState(0);
  const [twenty, setTwenty] = useState(0);
  const [hundred, setHundred] = useState(0);
  const [fiveHundred, setFiveHundred] = useState(0);
  const [twoThousand, setTwoThousand] = useState(0);

 // eslint-disable-next-line
 const calculateChange = () => {
  setFive(0);
  setOne(0);
  setTen(0);
  setTwenty(0);
  setHundred(0);
  setFiveHundred(0);
  setTwoThousand(0);

  let changeCash = cash - bill;

  console.log(changeCash);

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

  useEffect(() => {
    
   calculateChange();
    // eslint-disable-next-line
  }, [bill, cash ]);

  return (
    <div className={styles.container}>
      <Fade right>
      <h2>Cash Recieved : {cash}</h2>
        <h2>Bill Amount : {bill}</h2>
        {<h2>To return : {cash-bill}</h2>}
       
        <div className={styles.subContainer}>
        <div className={styles.miniContainer}>
            <h3>Note Value : </h3>
            <h3> Quantity : </h3>
          </div>
          <div className={styles.miniContainer}>
            <h3>2000</h3>
            <h3> {twoThousand}</h3>
          </div>
          <div className={styles.miniContainer}>
            <h3>500 </h3>
            <h3> {fiveHundred}</h3>
          </div>
          <div className={styles.miniContainer}>
            <h3>100</h3>
            <h3> {hundred}</h3>
          </div>
          <div className={styles.miniContainer}>
            <h3>20 </h3>
            <h3> {twenty}</h3>
          </div>
          <div className={styles.miniContainer}>
            <h3>10 </h3>
            <h3> {ten}</h3>
          </div>
          <div className={styles.miniContainer}>
            <h3>5 </h3>
            <h3> {five}</h3>
          </div>
          <div className={styles.miniContainer}>
            <h3>1 </h3>
            <h3> {one}</h3>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Cash;

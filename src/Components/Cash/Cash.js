import React from "react";
import styles from "./Cash.module.css";

const Cash = ({ bill, cash, one ,five,ten,twenty,hundred,fiveHundred,twoThousand}) => {


  return (
    <div className={styles.container}>
      <h2>Bill Amount : {bill}</h2>
      <h2>Cash Recieved : {cash}</h2>
      <h3>2000: {twoThousand}</h3>
      <h3>500: {fiveHundred}</h3>
      <h3>100: {hundred}</h3>
      <h3>20: {twenty}</h3>
      <h3>10: {ten}</h3>
      <h3>5: {five}</h3>
      <h3>1: {one}</h3>
    </div>
  );
};

export default Cash;

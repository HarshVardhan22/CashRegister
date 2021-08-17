import styles from"./App.module.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { useState } from "react";
import Cash from "./Components/Cash/Cash";
const App = () => {
  const [billAmount, setBillAmount] = useState(0);
  const [cashGiven, setCashGiven] = useState(0);
  const [five, setFive] = useState(0);
  const [one, setOne] = useState(0);
  const [ten, setTen] = useState(0);
  const [twenty, setTwenty] = useState(0);
  const [hundred, setHundred] = useState(0);
  const [fiveHundred, setFiveHundred] = useState(0);
  const [twoThousand, setTwoThousand] = useState(0);

  const calculateChange = (bill,cash) => {
    setFive(0);
    setOne(0);
    setTen(0);
    setTwenty(0);
    setHundred(0);
    setFiveHundred(0);
    setTwoThousand(0);
    
    let changeCash = parseInt(cash) - parseInt(bill);
    while (changeCash >= 2000) {
      setTwoThousand(twoThousand=>twoThousand+1);
      changeCash -= 2000;
    }
    while (changeCash >= 500) {
      setFiveHundred(fiveHundred=>fiveHundred+1);
      changeCash -= 500;
    }

    while (changeCash >= 100) {
      setHundred(hundred=>hundred+1);
      changeCash -= 100;
    }
    while (changeCash >= 20) {
      setTwenty(twenty=>twenty+1);
      changeCash -= 20;
    }
    while (changeCash >= 10) {
      setTen(ten=>ten+1);
      changeCash -= 10;
    }
    while (changeCash >= 5) {
      setFive(five=>five+1);
      changeCash -= 5;
    }
    while (changeCash > 0) {
      setOne(one=>one+1);
      changeCash -= 1;
    }
    console.log(one);
  };

  const setValue = (bill,cash) => {
    setBillAmount(bill);
    setCashGiven(cash);
    calculateChange(bill,cash);
  }

  

  return (
    <div className={styles.container}>
      <Navbar />
      <Home setValue={setValue}/>
      <Cash bill={billAmount} cash={cashGiven} one ={one} five ={five} ten = {ten} twenty ={twenty} hundred = {hundred} fiveHundred = {fiveHundred} twoThousand ={twoThousand}/>
    </div>
  );
};

export default App;

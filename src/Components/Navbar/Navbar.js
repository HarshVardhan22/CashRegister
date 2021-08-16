import React from "react";
import styles from "./Navbar.module.css";
import { FaReact, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className={styles.container}>
    
      <a href="https://github.com/HarshVardhan22">
        <FaGithub color="black" size="28px" />
      </a>

      <a href="https://harshvardhanportfolio.netlify.app/">
        <FaReact color="magenta" size="28px" />
      </a>

      <a href="https://www.linkedin.com/in/harshvardhan-5a64a8148/">
        <FaLinkedin color="blue" size="28px" />
      </a>

      <a href="https://www.instagram.com/harsh.vardhan_/">
        <FaInstagram color="red" size="28px" />
      </a>

    </div>
  );
};

export default Navbar;

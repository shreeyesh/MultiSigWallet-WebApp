import React from "react";
import styles from "./Footer.module.css";
import github from "../static/github-favicon.png";


interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <div className={styles.component}>
      <img src={github} className={styles.image} alt="github" />
      <a href="https://github.com/shreeyesh" target="__blank">
        Git
      </a>
      <div className={styles.bar}>|</div>
      
      <a href="https://www.linkedin.com/in/shreeyesh-tripathi-575b50173/" target="__blank">
        trippdev.eth
      </a>
    </div>
  );
};

export default Footer;

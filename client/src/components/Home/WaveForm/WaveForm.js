import React from "react";
import styles from "./WaveForm.module.css";

const WaveForm = () => {

  const generateDiv = () => {



    let divs = [];
    for(let i = 0; i < 30; i++) {
      let delay = (i * 0.15).toString() + 's';
      divs.push (<div key={i} style={{width:'20px', animationDelay: delay}} ></div>)
    }
    return divs;
  }

  return (
    <div className={styles.WaveForm}>
      {generateDiv()}
    </div>
  );
};
export default WaveForm;

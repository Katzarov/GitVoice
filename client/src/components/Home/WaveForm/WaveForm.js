import React from "react";
import styles from "./WaveForm.module.scss";

const WaveForm = () => {
  const generateBars = () => {
    const numBars = 30;
    let bars = [];
    for (let i = 0; i < numBars; i++) {
      bars.push(<div key={i} id={`bar${i}`}/>);
    }
    return bars;
  };

  return <div className={styles.WaveForm}>{generateBars()}</div>;
};
export default WaveForm;

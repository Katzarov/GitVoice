import React from "react";
import styles from "./Home.module.css";
//import Main from "../components/Home/Main/Main";
import WaveForm from "../components/Home/WaveForm/WaveForm";
import NavBar from "../components/Home/NavBar/NavBar";

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.MainSection}>
        <div className={styles.NavBarContainer}>
          <NavBar />
        </div>
        <div className={styles.TitleSubContainer}>
          <div className={styles.Title}>GIT VOICE</div>
          <div className={styles.SubTitle}>
            voice notifications for your github repository
          </div>
        </div>

        <div className={styles.MainButton}>GET STARTED</div>

        <div className={styles.WaveFormContainer}>
          <WaveForm />
        </div>
      </div>
      next section
    </div>
  );
};

export default Home;

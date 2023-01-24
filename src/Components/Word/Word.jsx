import React from "react";
import styles from "./Word.module.css";
import { IoMdPlay } from "react-icons/io";
const Word = () => {
  return (
    <div className={styles.container}>
      <div className={styles.word}>
        <h2 className={styles.wordText}>word</h2>
        <span className={styles.pronanunciation}>/wɜːd/</span>
      </div>
      <div className={styles.playBtn}>
        <IoMdPlay className={styles.playIcon} />
      </div>
    </div>
  );
};
export default Word;

import React from "react";
import styles from "./Word.module.css";
import { IoMdPlay } from "react-icons/io";
const Word = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.word}>
        <h2 className={styles.wordText}>{props.data[0].word}</h2>
        <span className={styles.pronanunciation}>{props.data[0].phonetics[1].text}</span>
      </div>
      <div className={styles.playBtn}>
        <IoMdPlay className={styles.playIcon} />
      </div>
    </div>
  );
};
export default Word;

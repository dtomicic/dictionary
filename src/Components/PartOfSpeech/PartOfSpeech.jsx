import React from "react";
import styles from "./PartOfSpeech.module.css";

const PartOfSpeech = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.headerText}>{props.part}</h2>
        <hr className={styles.line} />
      </div>
      <div className={styles.body}>
        <h3 className={styles.bodyHeader}>Meaning</h3>
        <ul className={styles.bodyList}>
          <li className={styles.bodyListItem}>
            (etc.) A set of keys used to operate a typewriter, computer, etc.
          </li>
          <li className={styles.bodyListItem}>
            A component of many instruments including the piano, organ, and
            harpsichord consisting of usually black and white keys that cause
            different tones to be produced when struck.
          </li>
          <li className={styles.bodyListItem}>
            A device with keys of a musical keyboard, used to control electronic
            sound-producing devices which may be built into or separate from the
            keyboard device.
          </li>
        </ul>
        <div className={styles.bodySynonyms}>
          <h3 className={styles.bodyHeader}>Synonyms</h3>
          <ul className={styles.bodySynonymsList}>
            <li className={styles.bodySynonymsListItem}>electronic keyboard</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default PartOfSpeech;

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
          {props.data.length > 0 && (
            <>
              {props.part === "noun" ? (
                <>
                  {props.data[0].meanings[0].definitions.map((item) => {
                    return (
                      <li className={styles.bodyListItem}>{item.definition}</li>
                    );
                  })}
                </>
              ) : (
                <>
                  {props.data[0].meanings[1].definitions.map((item) => {
                    return (
                      <li className={styles.bodyListItem}>{item.definition}</li>
                    );
                  })}
                </>
              )}
            </>
          )}
        </ul>
        <div className={styles.bodySynonyms}>
          <h3 className={styles.bodyHeader}>Synonyms</h3>
          <ul className={styles.bodySynonymsList}>
            {props.data.length > 0 && (
              <>
                {props.part === "noun" ? (
                  <>
                    {props.data[0].meanings[0].synonyms && (
                      <>
                        {props.data[0].meanings[0].synonyms.map((item) => {
                          return (
                            <li className={styles.bodySynonymsListItem}>
                              {item}
                            </li>
                          );
                        })}
                      </>
                    )}
                  </>
                ) : (
                  <>
                    {props.data[0].meanings[1].synonyms && (
                      <>
                        {props.data[0].meanings[1].synonyms.map((item) => {
                          return (
                            <li className={styles.bodySynonymsListItem}>
                              {item}
                            </li>
                          );
                        })}
                      </>
                    )}
                  </>
                )}
              </>
            )}
            {/* <li className={styles.bodySynonymsListItem}>electronic keyboard</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default PartOfSpeech;

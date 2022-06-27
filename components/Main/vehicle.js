import React from "react";
import styles from "./main.module.css";

export const Vehicle = ({ vehicle, onShow }) => {
  const { make, model, primaryColour, motTests, registration } = vehicle;
  const { expiryDate, odometerValue, odometerUnit } = motTests[0];
  return (
    <li className={styles.tableRow} onClick={() => onShow(registration)}>
      <div className={styles.col + " " + styles.col1}>{make}</div>
      <div className={styles.col + " " + styles.col2}>{model}</div>
      <div className={styles.col + " " + styles.col3}>{primaryColour}</div>
      <div className={styles.col + " " + styles.col4}>{expiryDate}</div>
      <div className={styles.col + " " + styles.col5}>
        {odometerValue + " " + odometerUnit}
      </div>
    </li>
  );
};

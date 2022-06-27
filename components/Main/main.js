import React from "react";
import { Vehicle } from "./vehicle";
import styles from "./main.module.css";

export default function MainRegistration({ vehicles, onShow }) {
  return (
    <div className={styles.userContainer}>
      <div className={styles.container}>
        <ul className={styles.responsiveTable}>
          <li className={styles.tableHeader}>
            <div className={styles.col + " " + styles.col1}>Make</div>
            <div className={styles.col + " " + styles.col2}>Model</div>
            <div className={styles.col + " " + styles.col3}>Color</div>
            <div className={styles.col + " " + styles.col4}>Expiry Date</div>
            <div className={styles.col + " " + styles.col5}>Mileage</div>
          </li>
          {vehicles &&
            vehicles.map((vehicle, idx) => (
              <Vehicle onShow={onShow} key={idx} vehicle={vehicle} />
            ))}
        </ul>
      </div>
    </div>
  );
}

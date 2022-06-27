import React from "react";
import styles from "./main.module.css";

export default function Modal({ onShow, children }) {
  return (
    <div onClick={onShow} className={styles.modalContainer}>
      <div onClick={(e) => e.stopPropagation()} className={styles.modalContent}>
        {children}
      </div>
    </div>
  );
}

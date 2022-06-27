import React from "react";
import styles from './main.module.css'

export default function Modal({ children }) {
    return (
        <div className={styles.modalContainer}>
            <div className={styles.modalContent}>{children}</div>
        </div>
    )
}

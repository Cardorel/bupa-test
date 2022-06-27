import React from "react";
import styles from "./main.module.css";


export default function InputSearch({ onSubmit, onChange, registrationNumber }) {
    return (
        <div className={styles.searchContent}>
            <input
                type="text"
                className={styles.searchInput}
                value={registrationNumber}
                onChange={onChange}
                placeholder="search by registration number"
            />
            <button onClick={onSubmit} className={styles.btnFind}>Find</button>
        </div>
    );
}

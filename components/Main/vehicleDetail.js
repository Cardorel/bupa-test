import React from "react";
import styles from '../../components/Main/main.module.css'

export default function VehicleDetail({ vehicle }) {
    const {
        registration,
        make,
        model,
        firstUsedDate,
        fuelType,
        primaryColour,
        motTests,
    } = vehicle;
    return (
        <div className={styles.detailContainer}>
            <div className={styles.detailContent}>
                <h6>Registration number </h6>
                <p>{registration.length ? registration : "No registration number"}</p>
            </div>
            <div className={styles.detailContent}>
                <h6>Make </h6>
                <p>{make}</p>
            </div>
            <div className={styles.detailContent}>
                <h6>Model </h6>
                <p>{model}</p>
            </div>
            <div className={styles.detailContent}>
                <h6>Color </h6>
                <p>{primaryColour}</p>
            </div>
            <div className={styles.detailContent}>
                <h6>First used date </h6>
                <p>{firstUsedDate}</p>
            </div>
            <div className={styles.detailContent}>
                <h6>Fuel Type </h6>
                <p>{fuelType}</p>
            </div>
            {motTests && motTests.map((mot, idx) => <div>
                <div className={styles.detailContent}>
                    <h6>Completed Date</h6>
                    <p>{mot.completedDate}</p>
                </div>
                <div className={styles.detailContent}>
                    <h6>Test Result</h6>
                    <p>{mot.testResult}</p>
                </div>
                <div className={styles.detailContent}>
                    <h6>Expiry Date</h6>
                    <p>{mot.expiryDate}</p>
                </div>
                <div className={styles.detailContent}>
                    <h6>Mileage at last MO</h6>
                    <p>{mot.odometerValue + ' ' + mot.odometerUnit}</p>
                </div>
                <div className={styles.detailContent}>
                    <h6>Mot Test Number</h6>
                    <p>{mot.motTestNumber}</p>
                </div>
            </div>)}
        </div>
    );
}

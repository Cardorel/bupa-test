import React from "react";
import styles from "./main.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

export default function NotFoundVehicle() {
  const router = useRouter();
  const { registration } = router?.query;
  return (
    <div className={styles.notFoundContainer}>
      <p className={styles.notFoundText}>
        We're not able to find this "{registration}" registrastion number.
      </p>
      <div className={styles.linkContent}>
        <Link href="/">Back To Home</Link>
        <Link href="/vehicles/testVehicle">Fetch Test Vehicles</Link>
      </div>
    </div>
  );
}

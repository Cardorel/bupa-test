import { useState } from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { useRouter } from "next/router";
import styles from "../components/Main/main.module.css";

export default function Home() {
  const [registrationNumber, setRegistrationNumber] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    if (registrationNumber.trim() !== "") {
      router.push({
        pathname: "/vehicles",
        query: { registration: registrationNumber },
      });
    }
  };

  const handleChange = (e) => setRegistrationNumber(e.target.value);
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={styles.searchContent}>
        <input
          type="text"
          className={styles.searchInput}
          value={registrationNumber}
          onChange={handleChange}
          placeholder="search by registration number"
        />
        <button onClick={handleSubmit} className={styles.btnFind}>
          Find
        </button>
      </div>
    </Layout>
  );
}

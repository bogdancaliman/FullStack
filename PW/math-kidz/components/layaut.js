import Head from "next/head";
import NavBar from "./navbar";
// @ts-ignore
import styles from "./layout.module.scss";
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>MathKids</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <div className={styles.layout}>{children}</div>
    </>
  );
}

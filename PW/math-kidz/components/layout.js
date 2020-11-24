import Head from "next/head";
import NavBar from "./navbar";
// @ts-ignore
import styles from "./layout.module.scss";
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>MathKids</title>
        <link rel="icon" href="/math_icon.png" />
      </Head>
      <NavBar />
      <div className={styles.layout}>{children}</div>
    </>
  );
}

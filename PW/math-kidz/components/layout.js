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
        <script type="text/javascript">
        var disqus_developer = 1;
        var disqus_url = 'http://localhost:3000'
        </script>
      </Head>
      <NavBar />
      <div className={styles.layout}>{children}</div>
    </>
  );
}

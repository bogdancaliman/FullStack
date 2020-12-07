import Link from "next/link";
// @ts-ignore
import styles from "./navbar.module.scss";

export default function NavBar() {
  return (
    <div className={styles.container}>
      <span className={styles.span}>
        <Link href="/">
          <a style={{ marginLeft: 0 }}>
            <img
              src="../math_icon.png"
              style={{ width: "21px", height: "21px" }}
            ></img>
            <h5 style={{ display: "inline" }}>ath Kidz</h5>
          </a>
        </Link>
        <Link href="/">
          <a>Acasa</a>
        </Link>
        <Link href="/cursuri">
          <a>Cursuri</a>
        </Link>
      </span>

      <span className={styles.span}>
        <Link href="/login">
          <a>Log in</a>
        </Link>
      </span>
    </div>
  );
}

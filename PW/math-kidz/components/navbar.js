import Link from "next/link";
// @ts-ignore
import styles from "./navbar.module.scss";

export default function NavBar() {
  return (
    <div className={styles.container}>
      <span className={styles.span}>
        <Link href="/">
          <a>Math Kidz</a>
        </Link>
        <Link href="/">
          <a>Acasa</a>
        </Link>
        <Link href="/cursuri">
          <a>Cursuri</a>
        </Link>
      </span>

      <span className={styles.span}>
        <Link href="#">Log in</Link>
      </span>
    </div>
  );
}

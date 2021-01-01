import Link from "next/link";
// @ts-ignore
import styles from "./navbar.module.scss";
import isAuthenticated from "../utils/auth";
import { useRouter } from 'next/router'

export default function NavBar() {
  const router = useRouter()
    function logOut() {
    localStorage.removeItem("auth");
    localStorage.removeItem("user");
    router.push("/");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
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
        {
          isAuthenticated()?<Link href="/cursuri">
          <a>Cursuri</a>
        </Link>:null
        }
      </span>

      <span className={styles.span}>
      {
          isAuthenticated()?<Link href="/">
          <a onClick={logOut}>Log out</a>
          </Link>:(<Link href="/login">
          <a>Log in</a>
          </Link>)
      }
      </span>
    </div>
  );
}

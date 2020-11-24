import Link from "next/link";
// @ts-ignore
import styles from "./card.module.scss";
export default function ArticleCard({ href, title, text }) {
  return (
    <Link href={href}>
      <a className={styles.container}>
        <article className={styles.article}>
          <h2>{title}</h2>
          <p>{text}</p>
        </article>
      </a>
    </Link>
  );
}
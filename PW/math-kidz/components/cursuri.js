// @ts-ignore
import styles from "./cursuri.module.scss";
import Link from "next/link";
import { useState, useEffect } from "react";

import { useRouter } from "next/router";

const categorii = ["Clasa I", "Clasa II"];
const cursuriCategorie = {
  "Clasa I": ["Adunare", "Scadere"],
  "Clasa II": ["Radicali", "Integrale"],
};

function LinkCatreCurs({ nume }) {
  return (
    <li className={styles.link}>
      <Link href={`/cursuri/${nume}`}>
        <a>{nume}</a>
      </Link>
    </li>
  );
}

function Categorie({ nume, deschis = false }) {
  const [aratCursuri, setAratCursuri] = useState(deschis);

  function showCursuri() {
    return cursuriCategorie[nume].map((numeCurs) => (
      <LinkCatreCurs nume={numeCurs} />
    ));
  }
  return (
    <div>
      <h2
        className={styles.categorie}
        onClick={() => setAratCursuri(!aratCursuri)}
      >
        {nume}
      </h2>
      <ul>{aratCursuri && showCursuri()}</ul>
    </div>
  );
}

export default function Cursuri({ children, deschis = null }) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar_container}>
        {categorii.map((categorie, index) => {
          return categorie === deschis ? (
            <Categorie key={index} nume={categorie} deschis={true} />
          ) : (
            <Categorie key={index} nume={categorie} />
          );
        })}
      </div>
      <div className={styles.main_container}>{children}</div>
    </div>
  );
}

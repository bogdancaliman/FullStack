// @ts-ignore
import styles from "./cursuri.module.scss";
import Link from "next/link";
import { useState, useEffect } from "react";

import { useRouter } from "next/router";

const categorii = ["Clasa I", "Clasa II", "Clasa III", "Clasa IV"];
const cursuriCategorie = {
  "Clasa I": [
    "Numere naturale 0 - 100",
    "Adunare",
    "Scadere",
    "Figuri plane 2D",
  ],
  "Clasa II": [
    "Numerele de la 0-1.000",
    "Adunare si Scadere cu trecere peste ordin",
    "Inmultire",
    "Impartirea cu rest 0",
  ],
  "Clasa III": ["Ordinea efectuarilor operatiilor", "Corpuri 3D", "Perimetrul"],
  "Clasa IV": ["Numere naturale 0-1.000.000", "Fractii", "Masura si masurare"],
};

function LinkCatreCurs({ nume }) {
  let numelink = nume.replace(/\s/g, "");
  console.log(numelink);

  let lastcurs = undefined;
  if (typeof window !== "undefined") {
    lastcurs = localStorage.getItem("lastcurs");
  }
  function rememberLastCurs() {
    localStorage.setItem("lastcurs", nume);
  }

  return (
    <li className={styles.link}>
      <Link href={`/cursuri/${numelink}`}>
        <a
          onClick={rememberLastCurs}
          className={`${
            lastcurs !== undefined && lastcurs === nume
              ? styles.curs_selectat
              : ""
          }`}
        >
          {nume}
        </a>
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

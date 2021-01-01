import Layout from "../../components/layout";
import Cursuri from "../../components/cursuri";
import { DiscussionEmbed } from "disqus-react";

export default function Adunare() {
  let numeUtilizator = null;

  if (typeof localStorage !== "undefined") {
    numeUtilizator = JSON.parse(localStorage.getItem("user")).username;
  }
  return (
    <Layout>
      <Cursuri deschis="Clasa I">
        <h1 style={{ color: "rgb(53, 181, 255)" }}>Scadere</h1>
        <h3>
          Scăderea este inversul adunării, însemnând că dacă începem cu orice
          număr la care adăugăm orice număr, apoi scădem numărul pe care l-am
          adunat, ne întoarcem la numărul cu care am început. Scăderea este
          reprezentată prin semnul minus "-".
        </h3>
        <h2>7(Descazut) - 4(Scazator) = 3(Diferenta)</h2>
        <h2>Tabla Scădereii:</h2>
        <div style={{ marginBottom: "10rem" }}>
          <h3>Scăderea cu zero (scăderea cu zero nu schimba rezultatul):</h3>
          <ul style={{ width: "17%", float: "left" }}>
            <li>
              0 - <span style={{ color: "red" }}>0</span> = 0
            </li>
            <li>
              1 - <span style={{ color: "red" }}>0</span> = 1
            </li>
            <li>
              2 - <span style={{ color: "red" }}>0</span> = 2
            </li>
            <li>
              3 - <span style={{ color: "red" }}>0</span> = 3
            </li>
            <li>
              4 - <span style={{ color: "red" }}>0</span> = 4
            </li>
          </ul>
          <ul style={{ width: "17%", float: "left" }}>
            <li>
              5 - <span style={{ color: "red" }}>0</span> = 5
            </li>
            <li>
              6 - <span style={{ color: "red" }}>0</span> = 6
            </li>
            <li>
              7 - <span style={{ color: "red" }}>0</span> = 7
            </li>
            <li>
              8 - <span style={{ color: "red" }}>0</span> = 8
            </li>
            <li>
              9 - <span style={{ color: "red" }}>0</span> = 9
            </li>
          </ul>
        </div>
        <div style={{ marginBottom: "10rem" }}>
          <h3>Scăderea cu unu:</h3>
          <ul style={{ width: "17%", float: "left" }}>
            <li>
              1 - <span style={{ color: "red" }}>1</span> = 0
            </li>
            <li>
              2 - <span style={{ color: "red" }}>1</span> = 1
            </li>
            <li>
              3 - <span style={{ color: "red" }}>1</span> = 2
            </li>
            <li>
              4 - <span style={{ color: "red" }}>1</span> = 3
            </li>
            <li>
              5 - <span style={{ color: "red" }}>1</span> = 4
            </li>
          </ul>
          <ul style={{ width: "17%", float: "left" }}>
            <li>
              6 - <span style={{ color: "red" }}>1</span> = 5
            </li>
            <li>
              7 - <span style={{ color: "red" }}>1</span> = 6
            </li>
            <li>
              8 - <span style={{ color: "red" }}>1</span> = 7
            </li>
            <li>
              9 - <span style={{ color: "red" }}>1</span> = 8
            </li>
            <li>
              10 - <span style={{ color: "red" }}>1</span> = 9
            </li>
          </ul>
        </div>
        <div style={{ marginBottom: "10rem" }}>
          <h3>Scăderea cu doi:</h3>
          <ul style={{ width: "17%", float: "left" }}>
            <li>
              2 - <span style={{ color: "red" }}>2</span> = 0
            </li>
            <li>
              3 - <span style={{ color: "red" }}>2</span> = 1
            </li>
            <li>
              4 - <span style={{ color: "red" }}>2</span> = 2
            </li>
            <li>
              5 - <span style={{ color: "red" }}>2</span> = 3
            </li>
            <li>
              6 - <span style={{ color: "red" }}>2</span> = 4
            </li>
          </ul>
          <ul style={{ width: "17%", float: "left" }}>
            <li>
              7 - <span style={{ color: "red" }}>2</span> = 5
            </li>
            <li>
              8 - <span style={{ color: "red" }}>2</span> = 6
            </li>
            <li>
              9 - <span style={{ color: "red" }}>2</span> = 7
            </li>
            <li>
              10 - <span style={{ color: "red" }}>2</span> = 8
            </li>
            <li>
              11 - <span style={{ color: "red" }}>2</span> = 9
            </li>
          </ul>
        </div>
        <div style={{ marginBottom: "10rem" }}>
          <h3>Scăderea cu trei:</h3>
          <ul style={{ width: "17%", float: "left" }}>
            <li>
              3 - <span style={{ color: "red" }}>3</span> = 0
            </li>
            <li>
              4 - <span style={{ color: "red" }}>3</span> = 1
            </li>
            <li>
              5 - <span style={{ color: "red" }}>3</span> = 2
            </li>
            <li>
              6 - <span style={{ color: "red" }}>3</span> = 3
            </li>
            <li>
              7 - <span style={{ color: "red" }}>3</span> = 4
            </li>
          </ul>
          <ul style={{ width: "17%", float: "left" }}>
            <li>
              8 - <span style={{ color: "red" }}>3</span> = 5
            </li>
            <li>
              9 - <span style={{ color: "red" }}>3</span> = 6
            </li>
            <li>
              10 - <span style={{ color: "red" }}>3</span> = 7
            </li>
            <li>
              11 - <span style={{ color: "red" }}>3</span> = 8
            </li>
            <li>
              12 - <span style={{ color: "red" }}>3</span> = 9
            </li>
          </ul>
        </div>
        <div style={{ marginBottom: "10rem" }}>
          <h3>Scăderea cu patru:</h3>
          <ul style={{ width: "17%", float: "left" }}>
            <li>
              4 - <span style={{ color: "red" }}>4</span> = 0
            </li>
            <li>
              5 - <span style={{ color: "red" }}>4</span> = 1
            </li>
            <li>
              6 - <span style={{ color: "red" }}>4</span> = 2
            </li>
            <li>
              7 - <span style={{ color: "red" }}>4</span> = 3
            </li>
            <li>
              8 - <span style={{ color: "red" }}>4</span> = 4
            </li>
          </ul>
          <ul style={{ width: "17%", float: "left" }}>
            <li>
              9 - <span style={{ color: "red" }}>4</span> = 5
            </li>
            <li>
              10 - <span style={{ color: "red" }}>4</span> = 6
            </li>
            <li>
              11 - <span style={{ color: "red" }}>4</span> = 7
            </li>
            <li>
              12 - <span style={{ color: "red" }}>4</span> = 8
            </li>
            <li>
              13 - <span style={{ color: "red" }}>4</span> = 9
            </li>
          </ul>
        </div>
        <div style={{ marginBottom: "10rem" }}>
          <h3>Scăderea cu cinci:</h3>
          <ul style={{ width: "17%", float: "left" }}>
            <li>
              5 - <span style={{ color: "red" }}>5</span> = 0
            </li>
            <li>
              6 - <span style={{ color: "red" }}>5</span> = 1
            </li>
            <li>
              7 - <span style={{ color: "red" }}>5</span> = 2
            </li>
            <li>
              8 - <span style={{ color: "red" }}>5</span> = 3
            </li>
            <li>
              9 - <span style={{ color: "red" }}>5</span> = 4
            </li>
          </ul>
          <ul style={{ width: "17%", float: "left" }}>
            <li>
              10 - <span style={{ color: "red" }}>5</span> = 5
            </li>
            <li>
              11 - <span style={{ color: "red" }}>5</span> = 6
            </li>
            <li>
              12 - <span style={{ color: "red" }}>5</span> = 7
            </li>
            <li>
              13 - <span style={{ color: "red" }}>5</span> = 8
            </li>
            <li>
              14 - <span style={{ color: "red" }}>5</span> = 9
            </li>
          </ul>
        </div>
        <div style={{ marginBottom: "10rem" }}>
          <h3>Scăderea cu sase:</h3>
          <ul style={{ width: "17%", float: "left" }}>
            <li>
              6 - <span style={{ color: "red" }}>6</span> = 0
            </li>
            <li>
              7 - <span style={{ color: "red" }}>6</span> = 1
            </li>
            <li>
              8 - <span style={{ color: "red" }}>6</span> = 2
            </li>
            <li>
              9 - <span style={{ color: "red" }}>6</span> = 3
            </li>
            <li>
              10 - <span style={{ color: "red" }}>6</span> = 4
            </li>
          </ul>
          <ul style={{ width: "17%", float: "left" }}>
            <li>
              11 - <span style={{ color: "red" }}>6</span> = 5
            </li>
            <li>
              12 - <span style={{ color: "red" }}>6</span> = 6
            </li>
            <li>
              13 - <span style={{ color: "red" }}>6</span> = 7
            </li>
            <li>
              14 - <span style={{ color: "red" }}>6</span> = 8
            </li>
            <li>
              15 - <span style={{ color: "red" }}>6</span> = 9
            </li>
          </ul>
        </div>
        <div style={{ marginBottom: "10rem" }}>
          <h3>Scăderea cu sapte:</h3>
          <ul style={{ width: "17%", float: "left" }}>
            <li>
              7 - <span style={{ color: "red" }}>7</span> = 0
            </li>
            <li>
              8 - <span style={{ color: "red" }}>7</span> = 1
            </li>
            <li>
              9 - <span style={{ color: "red" }}>7</span> = 2
            </li>
            <li>
              10 - <span style={{ color: "red" }}>7</span> = 3
            </li>
            <li>
              11 - <span style={{ color: "red" }}>7</span> = 4
            </li>
          </ul>
          <ul style={{ width: "17%", float: "left" }}>
            <li>
              12 - <span style={{ color: "red" }}>7</span> = 5
            </li>
            <li>
              13 - <span style={{ color: "red" }}>7</span> = 6
            </li>
            <li>
              14 - <span style={{ color: "red" }}>7</span> = 7
            </li>
            <li>
              15 - <span style={{ color: "red" }}>7</span> = 8
            </li>
            <li>
              16 - <span style={{ color: "red" }}>7</span> = 9
            </li>
          </ul>
        </div>
        <div style={{ marginBottom: "10rem" }}>
          <h3>Scăderea cu opt:</h3>
          <ul style={{ width: "17%", float: "left" }}>
            <li>
              8 - <span style={{ color: "red" }}>8</span> = 0
            </li>
            <li>
              9 - <span style={{ color: "red" }}>8</span> = 1
            </li>
            <li>
              10 - <span style={{ color: "red" }}>8</span> = 2
            </li>
            <li>
              11 - <span style={{ color: "red" }}>8</span> = 3
            </li>
            <li>
              12 - <span style={{ color: "red" }}>8</span> = 4
            </li>
          </ul>
          <ul style={{ width: "17%", float: "left" }}>
            <li>
              13 - <span style={{ color: "red" }}>8</span> = 5
            </li>
            <li>
              14 - <span style={{ color: "red" }}>8</span> = 6
            </li>
            <li>
              15 - <span style={{ color: "red" }}>8</span> = 7
            </li>
            <li>
              16 - <span style={{ color: "red" }}>8</span> = 8
            </li>
            <li>
              17 - <span style={{ color: "red" }}>8</span> = 9
            </li>
          </ul>
        </div>
        <div style={{ marginBottom: "10rem" }}>
          <h3>Scăderea cu noua:</h3>
          <ul style={{ width: "17%", float: "left" }}>
            <li>
              9 - <span style={{ color: "red" }}>9</span> = 0
            </li>
            <li>
              10 - <span style={{ color: "red" }}>9</span> = 1
            </li>
            <li>
              11 - <span style={{ color: "red" }}>9</span> = 2
            </li>
            <li>
              12 - <span style={{ color: "red" }}>9</span> = 3
            </li>
            <li>
              13 - <span style={{ color: "red" }}>9</span> = 4
            </li>
          </ul>
          <ul style={{ width: "17%", float: "left" }}>
            <li>
              14 - <span style={{ color: "red" }}>9</span> = 5
            </li>
            <li>
              15 - <span style={{ color: "red" }}>9</span> = 6
            </li>
            <li>
              16 - <span style={{ color: "red" }}>9</span> = 7
            </li>
            <li>
              17 - <span style={{ color: "red" }}>9</span> = 8
            </li>
            <li>
              18 - <span style={{ color: "red" }}>9</span> = 9
            </li>
          </ul>
        </div>
      </Cursuri>
      <DiscussionEmbed
      shortname={numeUtilizator}
      config={
        {
            url: "http://localhost:3001",
            identifier: "http://localhost:3001/cursuri/Adunare",
            title: "Adunare",
            language: 'en' //e.g. for Traditional Chinese (Taiwan)	
        }
      }
      />
    </Layout>
  );
}

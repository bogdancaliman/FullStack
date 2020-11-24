import Layout from "../components/layout";
import ArticleCard from "../components/card";
export default function Home() {
  return (
    <Layout>
      <div
        style={{
          width: "50%",
          margin: "auto",
          textAlign: "center",
          backgroundColor: "purple",
        }}
      >
        <h1>Despre MathKidz:</h1>
      </div>
      <div>
        <ArticleCard href='#' title='•	Ce trebuie copilul sa stie?' text='Copilul nu trebuia sa aiba cunostinte din matematica dar este obligatoriu sa stie sa citeasca pentru a putea parcurge cursurile' />
        <ArticleCard href='#' title='•	Ce clase acopera MathKidz?' text='MathKidz si-a propus sa invete copii tot pana din clasa I pana in clasa IV' />
        <ArticleCard href='#' title='•	Cum vor decurge cursurile?' text='Cursurile sunt clasate pe baza claselor I-IV iar la fiecare capitol dintr-un curs va fi cate un test de tip grila pentru a vedea daca copilul a inteles sau nu capitolul respectiv' />
      </div>
    </Layout>
  );
}

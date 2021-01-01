import Layout from "../../components/layout";
import Cursuri from "../../components/cursuri";
import isAuthenticated from "../../utils/auth"
export default function PaginaCursuri() {
   let numeUtilizator = null;

  if (typeof localStorage !== "undefined") {
    numeUtilizator = JSON.parse(localStorage.getItem("user")).username;
  }
  return (
    <Layout>
      {
        isAuthenticated()?<Cursuri>
        <div
          style={{
            top: "30%",
            position: "absolute",
            width: "50%",
            marginLeft: "auto",
          }}
        >
          <h1>Alege un curs, {numeUtilizator}</h1>
        </div>
      </Cursuri>:<p>Logheaza-te ca sa vezi cursurile</p>
      }
    </Layout>
  );
}

import Layout from "../../components/layout";
import Cursuri from "../../components/cursuri";

export default function PaginaCursuri() {
  return (
    <Layout>
      <Cursuri>
        <div
          style={{
            top: "30%",
            position: "absolute",
            width: "50%",
            marginLeft: "auto",
          }}
        >
          <h1>Alege</h1>
        </div>
      </Cursuri>
    </Layout>
  );
}

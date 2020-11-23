import Layout from "../../components/layout";
import Cursuri from "../../components/cursuri";

export default function PaginaCursuri() {
  return (
    <Layout>
      <Cursuri>
        <div
          style={{
            top: "50%",
            position: "absolute",
            width: "50%",
            marginLeft: "auto",
          }}
        >
          Alege un curs
        </div>
      </Cursuri>
    </Layout>
  );
}

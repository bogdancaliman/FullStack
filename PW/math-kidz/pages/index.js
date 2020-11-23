import Layout from "../components/layout";

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
        Pagina principala
      </div>
      <div style={{ backgroundColor: "red" }}>Pagina principala</div>
    </Layout>
  );
}

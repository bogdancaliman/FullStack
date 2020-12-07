import Link from "next/link";
import Layout from "../../components/layout";
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
        <h1>Log In</h1>
      </div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <form action="/action_page.php">
          <label for="fname">Username:</label>
          <br />
          <input type="text" id="fname" name="fname" />
          <br />
          <label for="lname">Password:</label>
          <br />
          <input type="password" id="lname" name="lname" />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div
        style={{
          marginTop: "3%",
          textAlign: "center",
        }}
      >
        <p>Daca nu ai un cont inscriete aici</p>
        <Link href="/login/signin">
          <a>
            <input type="submit" value="Sign In" />
          </a>
        </Link>
      </div>
    </Layout>
  );
}

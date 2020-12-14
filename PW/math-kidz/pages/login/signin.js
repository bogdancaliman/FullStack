import Link from "next/link";
import Layout from "../../components/layout";
export default function SignIn() {
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
        <h1>Sign In</h1>
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
          <label for="fname">E-mail:</label>
          <br />
          <input type="text" id="fname" name="fname" />
          <br />
          <label for="lname">Password:</label>
          <br />
          <input type="password" id="lname" name="lname" />
          <br />
          <label for="lname">Confirm Password:</label>
          <br />
          <input type="password" id="lname" name="lname" />
          <br />
          <br />
          <input type="submit" value="Sign In" />
          <br />
          <br />
          <Link href="/login">
            <a>
              <input type="submit" value="Back" />
            </a>
          </Link>
        </form>
      </div>
    </Layout>
  );
}

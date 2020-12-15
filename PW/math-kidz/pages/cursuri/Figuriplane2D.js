import Layout from "../../components/layout";
import Cursuri from "../../components/cursuri";
import Image from "next/image";

export default function Adunare() {
  return (
    <Layout>
      <Cursuri deschis="Clasa I">
        <h1 style={{ color: "rgb(53, 181, 255)" }}>Figuri plane 2D</h1>
        <h3>
          În geometrie, o formă bidimensională poate fi definită ca o figură
          plană sau o ca formă care are două dimensiuni - lungime și lățime.
        </h3>
        <h3>
          Formele bidimensionale sau 2D nu au grosime și pot fi măsurate doar în
          lungime și lățime.
        </h3>
        <h2>Figuri plane 2D:</h2>
        <Image
          src="/courses_images/Figuri2D/Cerc.png"
          alt="Cerc"
          width={300}
          height={300}
        />
        <Image
          src="/courses_images/Figuri2D/Triunghi.png"
          alt="Triunghi"
          width={300}
          height={300}
        />
        <Image
          src="/courses_images/Figuri2D/Patrat.png"
          alt="Patrat"
          width={300}
          height={300}
        />
        <Image
          src="/courses_images/Figuri2D/Dreptunghi.png"
          alt="Dreptunghi"
          width={300}
          height={300}
        />
        <Image
          src="/courses_images/Figuri2D/Romb.png"
          alt="Romb"
          width={300}
          height={300}
        />
        <Image
          src="/courses_images/Figuri2D/Pentagon.png"
          alt="Pentagon"
          width={300}
          height={300}
        />
      </Cursuri>
    </Layout>
  );
}

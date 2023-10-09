import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <div className="input-container">
        <button className="go-back-button" style={{ marginBottom: "20px" }}>
          <span className="arrow">&#8592;</span>
          <span className="text">Go Back</span>
        </button>
      </div>

      <br />
      <img className="logo" src="../public/ACC_EASE_sombra.png" alt="" />
      <br />

      <h2
        style={{
          display: "grid",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "larger",
          fontWeight: "bolder",
        }}
      >
        Chose your type of identity confirmation
      </h2>
      <div className="container">
        <div className="image-container">
          <div className="image">
            <img
              className="image"
              src="../public/insectos/honey-bee-water-buckfast-59829.jpeg"
              alt="Imagen 1"
            />
          </div>
          <div className="image">
            <img
              src="../public/acsesorios/paraguas.jpg"
              alt="Imagen 2"
            />
          </div>
          <div className="image">
            <img src="../public/comida/frutilla.jpg" alt="Imagen 3" />
          </div>
        </div>
        <div className="image-container">
          <div className="image">
            <img
              className="image"
              src="../public/deportes/golf.jpg"
              alt="Imagen 1"
            />
          </div>
          <div className="image">
            <img src="../public/iconos/wifi.png" alt="Imagen 2" />
          </div>
          <div className="image">
            <img
              src="../public/digujos/capitan america.jpeg"
              alt="Imagen 3"
            />
          </div>
        </div>
        <div className="image-container">
          <div className="image">
            <img
              className="image"
              src="../public/animales/mamut.jfif"
              alt="Imagen 1"
            />
          </div>
          <div className="image">
            <img
              src="../public/astros/earth-blue-planet-globe-planet-87651.jpeg"
              alt="Imagen 2"
            />
          </div>
          <div className="image">
            <img src="../public/cocina/palillos.jfif" alt="Imagen 3" />
          </div>
        </div>
        <div className="input-container">
          <button
            className="stay"
            style={{ marginBottom: "20px" }}
            id="Confirm"
            onClick={() => {
              router.push("/select");
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </main>
  );
}

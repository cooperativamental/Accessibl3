import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <div className="container">
        <br />
        <img className="logo" src="/ACC_EASE_sombra.png" alt="" />
        <br />
        <div className="container" style={{ marginTop: "15px" }} />
        <div className="input-container">
          <input
            style={{ marginBottom: "20px", marginTop: "15px" }}
            type="text"
            placeholder="a34yr47g4488t47ty..."
          />
          <br />
          <button
            className="download"
            style={{ marginBottom: "20px", marginTop: "15px" }}
          >
            Download <img src="../relampago.png" alt="" />
          </button>
        </div>
        <br />
        <div className="image-container" style={{ marginTop: "15px" }}>
          <div className="image">
            <img src="/deportes/atletismo.jpg" alt="Imagen 1" />
          </div>
          <div className="image">
            <img src="/deportes/ajedres.jpg" alt="Imagen 2" />
          </div>
          <div className="image">
            <img src="/deportes/bowling.jpg" alt="Imagen 3" />
          </div>
        </div>
        <div className="image-container">
          <div className="image">
            <img src="/deportes/baseball.jpg" alt="Imagen 1" />
          </div>
          <div className="image">
            <img
              src="/deportes/equitacion.jpg"
              alt="Imagen 2"
            />
          </div>
          <div className="image">
            <img src="/deportes/ciclismo.jpg" alt="Imagen 3" />
          </div>
        </div>
        <div className="image-container">
          <div className="image">
            <img src="/deportes/boxeo.jpg" alt="Imagen 1" />
          </div>
          <div className="image">
            <img src="/deportes/escalada.jpg" alt="Imagen 2" />
          </div>
          <div className="image">
            <img
              src="/deportes/pelota hokey.jpg"
              alt="Imagen 3"
            />
          </div>
        </div>
        <div className="image-container">
          <div className="image">
            <img src="/deportes/golf.jpg" alt="Imagen 1" />
          </div>
          <div className="image">
            <img src="/deportes/martillo.jpg" alt="Imagen 2" />
          </div>
          <div className="image">
            <img src="/deportes/rugby.jpg" alt="Imagen 3" />
          </div>
        </div>
      </div>
      <div className="flame"></div>
    </main>
  );
}

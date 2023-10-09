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
        <img className="logo" src="../public/ACC_EASE_sombra.png" alt="" />
        <br />
        <div className="input-container">
          <button
            className="stay"
            style={{ marginBottom: "20px" }}
            id="Confirm"
            onClick={() => {
              router.push("/download");
            }}
          >
            Confirm
          </button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src="../public/deportes/atletismo.jpg" alt="Imagen 1" />
          </div>
          <div className="image">
            <img src="../public/deportes/ajedres.jpg" alt="Imagen 2" />
          </div>
          <div className="image">
            <img src="../public/deportes/bowling.jpg" alt="Imagen 3" />
          </div>
        </div>
        <div className="image-container">
          <div className="image">
            <img src="../public/deportes/baseball.jpg" alt="Imagen 1" />
          </div>
          <div className="image">
            <img
              src="../public/deportes/equitacion.jpg"
              alt="Imagen 2"
            />
          </div>
          <div className="image">
            <img src="../public/deportes/ciclismo.jpg" alt="Imagen 3" />
          </div>
        </div>
        <div className="image-container">
          <div className="image">
            <img src="../public/deportes/boxeo.jpg" alt="Imagen 1" />
          </div>
          <div className="image">
            <img src="../public/deportes/escalada.jpg" alt="Imagen 2" />
          </div>
          <div className="image">
            <img
              src="../public/deportes/pelota hokey.jpg"
              alt="Imagen 3"
            />
          </div>
        </div>
        <div className="image-container">
          <div className="image">
            <img src="../public/deportes/golf.jpg" alt="Imagen 1" />
          </div>
          <div className="image">
            <img src="../public/deportes/martillo.jpg" alt="Imagen 2" />
          </div>
          <div className="image">
            <img src="../public/deportes/rugby.jpg" alt="Imagen 3" />
          </div>
        </div>
        <div className="image-container">
          <div className="image">
            <img src="../public/deportes/golf.jpg" alt="Imagen 1" />
          </div>
          <div className="image">
            <img src="../public/deportes/martillo.jpg" alt="Imagen 2" />
          </div>
          <div className="image">
            <img src="../public/deportes/rugby.jpg" alt="Imagen 3" />
          </div>
        </div>
        <div className="image-container">
          <div className="image">
            <img src="../public/deportes/golf.jpg" alt="Imagen 1" />
          </div>
          <div className="image">
            <img src="../public/deportes/martillo.jpg" alt="Imagen 2" />
          </div>
          <div className="image">
            <img src="../public/deportes/rugby.jpg" alt="Imagen 3" />
          </div>
        </div>
        <div className="image-container">
          <div className="image">
            <img src="../public/deportes/golf.jpg" alt="Imagen 1" />
          </div>
          <div className="image">
            <img src="../public/deportes/martillo.jpg" alt="Imagen 2" />
          </div>
          <div className="image">
            <img src="../public/deportes/rugby.jpg" alt="Imagen 3" />
          </div>
        </div>
        <div className="image-container">
          <div className="image">
            <img src="../public/deportes/golf.jpg" alt="Imagen 1" />
          </div>
          <div className="image">
            <img src="../public/deportes/martillo.jpg" alt="Imagen 2" />
          </div>
          <div className="image">
            <img src="../public/deportes/rugby.jpg" alt="Imagen 3" />
          </div>
        </div>
      </div>

      <div className="image-container">
        <div className="image">
          <img src="../public/deportes/atletismo.jpg" alt="Imagen 1" />
        </div>
        <div className="image">
          <img src="../public/deportes/ajedres.jpg" alt="Imagen 2" />
        </div>
        <div className="image">
          <img src="../public/deportes/bowling.jpg" alt="Imagen 3" />
        </div>
      </div>
      <div className="image-container">
        <div className="image">
          <img src="../public/deportes/baseball.jpg" alt="Imagen 1" />
        </div>
        <div className="image">
          <img src="../public/deportes/equitacion.jpg" alt="Imagen 2" />
        </div>
        <div className="image">
          <img src="../public/deportes/ciclismo.jpg" alt="Imagen 3" />
        </div>
      </div>
      <div className="image-container">
        <div className="image">
          <img src="../public/deportes/boxeo.jpg" alt="Imagen 1" />
        </div>
        <div className="image">
          <img src="../public/deportes/escalada.jpg" alt="Imagen 2" />
        </div>
        <div className="image">
          <img
            src="../public/deportes/pelota hokey.jpg"
            alt="Imagen 3"
          />
        </div>
      </div>
      <div className="image-container">
        <div className="image">
          <img src="../public/deportes/golf.jpg" alt="Imagen 1" />
        </div>
        <div className="image">
          <img src="../public/deportes/martillo.jpg" alt="Imagen 2" />
        </div>
        <div className="image">
          <img src="../public/deportes/rugby.jpg" alt="Imagen 3" />
        </div>
      </div>
      <div className="image-container">
        <div className="image">
          <img src="../public/deportes/golf.jpg" alt="Imagen 1" />
        </div>
        <div className="image">
          <img src="../public/deportes/martillo.jpg" alt="Imagen 2" />
        </div>
        <div className="image">
          <img src="../public/deportes/rugby.jpg" alt="Imagen 3" />
        </div>
      </div>
      <div className="image-container">
        <div className="image">
          <img src="../public/deportes/golf.jpg" alt="Imagen 1" />
        </div>
        <div className="image">
          <img src="../public/deportes/martillo.jpg" alt="Imagen 2" />
        </div>
        <div className="image">
          <img src="../public/deportes/rugby.jpg" alt="Imagen 3" />
        </div>
      </div>
      <div className="image-container">
        <div className="image">
          <img src="../public/deportes/golf.jpg" alt="Imagen 1" />
        </div>
        <div className="image">
          <img src="../public/deportes/martillo.jpg" alt="Imagen 2" />
        </div>
        <div className="image">
          <img src="../public/deportes/rugby.jpg" alt="Imagen 3" />
        </div>
      </div>
      <div className="image-container">
        <div className="image">
          <img src="../public/deportes/golf.jpg" alt="Imagen 1" />
        </div>
        <div className="image">
          <img src="../public/deportes/martillo.jpg" alt="Imagen 2" />
        </div>
        <div className="image">
          <img src="../public/deportes/rugby.jpg" alt="Imagen 3" />
        </div>
      </div>
    </main>
  );
}

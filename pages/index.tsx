import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <div className="container">
        <br />
        <img className="logo" src="../public/ACC_EASE_sombra.png" alt="" />
        <br />
        <br />
        <h2
          style={{
            display: "grid",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "larger",
            fontWeight: "bolder",
            color: "orangered",
            marginBottom: "75px",
          }}
        >
          Chose your type of identity confirmation
        </h2>
      </div>
      <br />
      <div className="container">
        <div
          className="image-container"
          style={{ display: "grid", justifyItems: "center" }}
        >
          <button
            id="PassWord"
            style={{
              width: "auto",
              height: "80px",
              padding: "25%",
              fontSize: "large",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              background: "white",
            }}
            onClick={() => {
              alert("Will add this feature soon!");
            }}
          >
            PassWord
          </button>
          <button
            id="PassImages"
            style={{
              width: "auto",
              height: "80px",
              padding: "25%",
              fontSize: "large",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              background: "white",
            }}
            onClick={() => {
              router.push("/chose");
            }}
          >
            PassImages
          </button>
        </div>
      </div>
    </main>
  );
}

import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <div className="container">
        <br />
        <img className="logo" src="/ACC_EASE_sombra.png" alt="" />
        <br />
        <br />
        <h2
          className="text-center text-[orangered]"
          style={{
            fontSize: "larger",
            marginBottom: "75px",
          }}
        >
          Chose your type of identity confirmation
        </h2>
      </div>
      <br />
        <div
          className="image-container"
          style={{ display: "grid", justifyItems: "center" }}
        >
          <button
            id="PassWord"
            className="flex items-center p-8 h-20 justify-items-center bg-white"
            onClick={() => {
              alert("Will add this feature soon!");
            }}
          >
            PassWord
          </button>
          <button
            id="PassImages"
            className="flex items-center p-8 h-20 justify-items-center bg-white"
            onClick={() => {
              router.push("/chose");
            }}
          >
            PassImages
          </button>
        </div>
    </main>
  );
}

import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <div className="container">
       
        <img className="h-auto w-auto logo" src="/ACC_EASE_sombra.png" alt="" />
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
            className="flex items-center p-8 h-20 justify-items-center bg-green-600 rounded-md"
            onClick={() => {
              alert("Will add this feature soon!");
            }}
          >
            PassWord
          </button>
          <button
            id="PassImages"
            className="flex items-center p-8 h-20 justify-items-center bg-green-600 rounded-md shadow-md shadow-zinc-950 hover:text-white"
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

import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const images = [
    "/insectos/honey-bee-water-buckfast-59829.jpeg",
           "/acsesorios/paraguas.jpg",
           "/comida/frutilla.jpg",
          // "/deportes/golf.jpg",
          "/comida/cebolla.jpg",
           "/iconos/wifi.png",
           "/digujos/capitan america.jpeg",
           "/animales/mamut.jfif",
           "/astros/earth-blue-planet-globe-planet-87651.jpeg",
           "/cocina/palillos.jfif",
  ];
  return (
    <main>
    <div className="overflow-x-hidden overflow-y-auto max-h-[90vh] flex flex-col items-center justify-center">
      <div className="input-container">
        <button className="go-back-button" style={{ marginBottom: "20px" }}>
          <span className="arrow">&#8592;</span>
          <span className="text">Go Back</span>
        </button>
      </div>

      <img className="logo" src="/ACC_EASE_sombra.png" alt="" />

      <h2
        className="text-center text-[orangered] larger"
      >
        Chose your type of identity confirmation
      </h2>
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        {images.map((image) => (
          <Image
            key={image}
            src={image}
            alt={image}
            width={200}
            height={200}
            className=""
          />
        ))}
      </div>
         
    </div>
     <button
     className="bottom-0 bg-green-600 py-2 px-16 font-black  border-0 rounded-lg pointer mx-auto "
     id="Confirm"
     onClick={() => {
       router.push("/select");
     }}
   >
     Confirm
   </button>
  </main>
  );
}

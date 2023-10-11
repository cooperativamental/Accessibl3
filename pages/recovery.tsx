import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import images from "@/consts/images";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
 
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

      
      <div className="">
        {images.map((image) => (
          <div className="inline-block p-2">
          <Image
            key={image}
            src={image}
            alt={image}
            width={200}
            height={200}
            className=""
          />
          </div>
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

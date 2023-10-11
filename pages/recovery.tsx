import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import images from "@/consts/images";
import words from "@/consts/words";
import { useState } from "react";

export default function Home() {
  const [mnemonicIndexes, setMnemonicIndexes] = useState<number[]>([]);
  const router = useRouter();

  const handleMnemonicIndex = (index: number) => {
    if (mnemonicIndexes.length === 12 && !mnemonicIndexes.includes(index)) {
      return;
    }
    if (mnemonicIndexes.includes(index)) {
      setMnemonicIndexes(mnemonicIndexes.filter((i) => i !== index));
    } else {
      setMnemonicIndexes([...mnemonicIndexes, index]);
    }
  };

  const handleMnemonic = () => {
    const mnemonic = mnemonicIndexes.map((index) => words[index]).join(" ");
    const keys = [
      ...JSON.parse(localStorage.getItem("mnemonic") ?? ""),
      mnemonic,
    ];
    localStorage.setItem("mnemonic", JSON.stringify(keys));
    router.push("/");
  };
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
          {images.map((image, index) => (
            <div className="inline-block p-2">
              <Image
                key={image}
                src={image}
                alt={image}
                width={200}
                height={200}
                onClick={() => {
                  handleMnemonicIndex(index);
                }}
                className={`${
                  mnemonicIndexes.includes(index)
                    ? "border-4 border-green-600"
                    : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>
      {mnemonicIndexes.length === 12 ? (
        <button
          className="bottom-0 bg-green-600 py-2 px-16 font-black  border-0 rounded-lg pointer mx-auto "
          id="Confirm"
          onClick={handleMnemonic}
        >
          Confirm
        </button>
      ) : null}
    </main>
  );
}

import Image from "next/image";
import { useRouter } from "next/router";
import { Keypair } from "@solana/web3.js";
import { useEffect, useState } from "react";
import * as bip39 from "bip39";
import words from "@/consts/words";
import images from "@/consts/images";

export default function Home() {
  const [keys, setKeys] = useState<(string)[]>([]);

  useEffect(() => {
    let keys = [];
    try {
      keys = JSON.parse(localStorage.getItem('mnemonic') ?? "");
    } catch (error) { }
    if (keys.length > 0) {
      setKeys(keys);
    } else {
      const key = bip39?.generateMnemonic();
      const keyspairs = [key]
      localStorage.setItem('mnemonic', JSON.stringify(keyspairs));
      setKeys(keyspairs);

    }
  }, []);

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
            placeholder="..."
            readOnly
            value={
              Keypair.fromSeed((bip39.mnemonicToSeedSync(keys[0], "")).slice(0, 32)).publicKey.toBase58()
            }
          />
          <br />
          <button
            className="download"
            style={{ marginBottom: "20px", marginTop: "15px" }}
            onClick={() => {
              // return a wallet.json file with the keypairs secretKey
              const element = document.createElement("a");
              const seed = bip39.mnemonicToSeedSync(keys[0], ""); // (mnemonic, password)
              const keypair = Keypair.fromSeed(seed.slice(0, 32));
              const file = new Blob([`[${keypair.secretKey.toString()}]`], {
                type: "text/plain;charset=utf-8",
              });
              element.href = URL.createObjectURL(file);
              element.download = "wallet.json";
              document.body.appendChild(element);
              element.click();
            }}
          >
            Download <img src="../relampago.png" alt="" />
          </button>
        </div>
        <br />
        <div className="grid grid-rows-3 grid-flow-col gap-4">

        {keys[0]?.split(" ")?.map((word) => {
          const index = words.findIndex((w) => w === word);
          if (images.length > index) {
            return (
              <Image
                key={word}
                src={images[index]}
                alt={word}
                width={200}
                height={200}
                className=""
              />
            );
          } else {
            return (
              <Image
                key={word}
                src={images[0]}
                alt={word}
                width={200}
                height={200}
                className=""
              />
            );
          } 
        })}
        </div>
      </div>
    </main>
  );
}

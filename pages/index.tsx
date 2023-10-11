import Image from "next/image";
import { useRouter } from "next/router";
import { Keypair } from "@solana/web3.js";
import { useEffect, useState } from "react";
import * as bip39 from "bip39";
import words from "@/consts/words";
import images from "@/consts/images";
import Link from "next/link";

export default function Home() {
  const [keys, setKeys] = useState<string[]>([]);
  const [walletIndex, setWalletIndex] = useState<number>(0);
  const [show, setShow] = useState<boolean>(false);
  const [notify, setNotify] = useState<boolean>(false);
  const toggle = () => setShow(!show);

  const copyText = (entryText: string) => {
    navigator.clipboard.writeText(entryText);
  };

  useEffect(() => {
    let keys = [];
    try {
      keys = JSON.parse(localStorage.getItem("mnemonic") ?? "");
    } catch (error) {}
    if (keys.length > 0) {
      setKeys(keys);
    } else {
      const key = bip39?.generateMnemonic();
      const keyspairs = [key];
      localStorage.setItem("mnemonic", JSON.stringify(keyspairs));
      setKeys(keyspairs);
    }
  }, []);
  const handleWalletChange = (i: number) => {
    setWalletIndex(i);
  };
  const router = useRouter();
  const onNotify = () => {
    setNotify(true);
  };
  useEffect(() => {
    if (notify) {
      setTimeout(() => {
        setNotify(false);
      }, 2000);
    }
  }, [notify]
  );
  return (
    <main className="flex flex-col justify-center items-center w-full overflow-hidden">
      <img src="/ACC_EASE_sombra.png" alt="" />
      <div
        className="bg-white hover:bg-green-300"
        onClick={() =>{
          copyText(
            keys.length > walletIndex
              ? Keypair.fromSeed(
                  bip39.mnemonicToSeedSync(keys[walletIndex], "").slice(0, 32)
                ).publicKey.toBase58()
              : ""
          )
          onNotify()}
        }
      >
        {keys.length > walletIndex
          ? Keypair.fromSeed(
              bip39.mnemonicToSeedSync(keys[walletIndex], "").slice(0, 32)
            ).publicKey.toBase58()
          : ""}
      </div>

      <div
        className={`relative bg-blue-900 overflow-x-hidden transition-all duration-300 ${
          show ? "h-60 overflow-y-auto" : "h-8"
        }`}
      >
        <button onClick={toggle} className=" bg-blue-900 h-8  text-white ">
          {show ? "hidde" : "Select other wallets"}
        </button>
        <div className="  ml-4 mt-2 p-2">
          {keys.map((pubkey, index) => (
            <button
              className="block bg-blue-600 p-2 m-2 rounded overflow-hidden wrap whitespace-nowrap overflow-ellipsis max-w-[200px]"
              onClick={() => {
                handleWalletChange(index);
              }}
              key={Keypair.fromSeed(
                bip39.mnemonicToSeedSync(pubkey, "").slice(0, 32)
              ).publicKey.toBase58()}
            >
              {Keypair.fromSeed(
                bip39.mnemonicToSeedSync(pubkey, "").slice(0, 32)
              ).publicKey.toBase58()}
            </button>
          ))}
        </div>
      </div>
      <br />
      <Link href={"/recovery"} className="bg-green-600 p-2 px-8 rounded">
        Recover other wallet
      </Link>
      <button
        className="download"
        style={{ marginBottom: "20px", marginTop: "15px" }}
        onClick={() => {
          const element = document.createElement("a");
          const seed = bip39.mnemonicToSeedSync(keys[walletIndex], ""); // (mnemonic, password)
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
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        {keys[walletIndex]?.split(" ")?.map((word) => {
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
      {notify ? (
        <div className="absolute top-20 bg-green-600 py-2 px-16 font-black  border-0 rounded-lg pointer mx-auto ">
          Copied!
        </div>
      ) : null  
      }
    </main>
  );
}

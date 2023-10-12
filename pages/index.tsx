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
  }, [notify]);
  return (
    <main className="flex flex-col justify-center items-center w-full overflow-y-hidden">
      <div>
        <div className="flex flex-col items-center mt-2"> 
          <img className="h-6 w-12" src="/ACC_EASE_sombra.png" alt="AcceseaseLogo" />
          <h1 className="flex text-zinc-200 font-bold p-2 mb-2">Secret Recovery Images</h1>
          <p className="text-yellow-600 leading-5 text-center p-2 mb-2">This images, in this order, is the ONLY way to recover your wallet.</p>
          </div>
      </div>
      <div className="grid grid-rows-3 grid-flow-col gap-4 transition-all duration-300 ">
        {!show && keys[walletIndex]?.split(" ")?.map((word) => {
          const index = words.findIndex((w) => w === word);
          if (images.length > index) {
            return (
              <Image
                key={word}
                src={images[index]}
                alt={word}
                width={200}
                height={200}
                className="h-16 w-16 border border-neutral-900 rounded-md ring-1 ring-zinc-800"
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
                className="h-16 w-16 border border-neutral-900 rounded-md ring-1 ring-zinc-800"
              />
            );
          }
        })}
      </div>
      <div className="text-zinc-200 text-center p-2 leading-5 mt-6 text-sm">Your New Wallet Public Key:</div>
      <div
        className="bg-zinc-700 hover:bg-green-600 p-2 break-words w-11/12 rounded-md"
        onClick={() => {
          copyText(
            keys.length > walletIndex
              ? Keypair.fromSeed(
                  bip39.mnemonicToSeedSync(keys[walletIndex], "").slice(0, 32)
                ).publicKey.toBase58()
              : ""
          );
          onNotify();
        }}
      > 
        {keys.length > walletIndex
          ? Keypair.fromSeed(
              bip39.mnemonicToSeedSync(keys[walletIndex], "").slice(0, 32)
            ).publicKey.toBase58()
          : ""}
      </div>
      <br />
      <div className="flex flex-col p-4 border rounded-md border-zinc-600 gap-2">
      <div
          className={`relative overflow-x-hidden transition-all duration-300 rounded-md ${
            show ? "h-40 overflow-y-auto" : "h-10"
          }`}
        >

          <button onClick={toggle} className=" h-8 text-center text-xs p-2 text-zinc-200 ">
            {show ? "Show PassImage" : "Select Wallet"}
          </button>
          <div className="ml-4 mt-2 p-2">
            {keys.map((pubkey, index) => (
              <button
                className="block bg-zinc-700 p-2 m-2 rounded-md overflow-hidden wrap whitespace-nowrap overflow-ellipsis max-w-[200px]"
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
      <Link href={"/recovery"} className="text-zinc-200 bg-green-900 p-2 rounded-md">
        Recover passimages
      </Link>
      <button
        className="text-zinc-200 rounded-md bg-zinc-800 p-2"
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
        Download passimages
      </button>
    
        </div>
      {notify ? (
        <div className="absolute top-20 bg-green-600 py-2 px-16 font-black  border-0 rounded-lg pointer mx-auto ">
          Copied!
        </div>
      ) : null}
    </main>
  );
}

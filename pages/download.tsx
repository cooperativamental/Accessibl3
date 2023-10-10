import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { Keypair, PublicKey } from "@solana/web3.js";
import { useEffect, useState } from "react";
import * as bip39 from "bip39";

export default function Home() {

  const [keys, setKeys] = useState<(string)[]>([]);

  useEffect(() => {
    let keys = [];
    try { keys = JSON.parse(localStorage.getItem('mnemonic')??"");
    } catch (error) { }
    if (keys.length > 0) {
     setKeys(keys);
    }else{      
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
      console.log(`${keypair.publicKey.toBase58()}`); // 5ZWj7a1f8tWkjBESHKgrLmXshuXxqeY9SYcfbshpAqPG
      console.log(`Private key: [${keypair.secretKey.toString()}]`);
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
        <div className="image-container" style={{ marginTop: "15px" }}>
          <div className="image">
            <img src="/deportes/atletismo.jpg" alt="Imagen 1" />
          </div>
          <div className="image">
            <img src="/deportes/ajedres.jpg" alt="Imagen 2" />
          </div>
          <div className="image">
            <img src="/deportes/bowling.jpg" alt="Imagen 3" />
          </div>
        </div>
        <div className="image-container">
          <div className="image">
            <img src="/deportes/baseball.jpg" alt="Imagen 1" />
          </div>
          <div className="image">
            <img
              src="/deportes/equitacion.jpg"
              alt="Imagen 2"
            />
          </div>
          <div className="image">
            <img src="/deportes/ciclismo.jpg" alt="Imagen 3" />
          </div>
        </div>
        <div className="image-container">
          <div className="image">
            <img src="/deportes/boxeo.jpg" alt="Imagen 1" />
          </div>
          <div className="image">
            <img src="/deportes/escalada.jpg" alt="Imagen 2" />
          </div>
          <div className="image">
            <img
              src="/deportes/pelota hokey.jpg"
              alt="Imagen 3"
            />
          </div>
        </div>
        <div className="image-container">
          <div className="image">
            <img src="/deportes/golf.jpg" alt="Imagen 1" />
          </div>
          <div className="image">
            <img src="/deportes/martillo.jpg" alt="Imagen 2" />
          </div>
          <div className="image">
            <img src="/deportes/rugby.jpg" alt="Imagen 3" />
          </div>
        </div>
      </div>
      <div className="flame"></div>
    </main>
  );
}

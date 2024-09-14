import { Keypair } from "@solana/web3.js";
import dotenv from "dotenv";
// import { getKeypairFromEnvironment } from "@solana-developers/helpers";

// GENERATE A KEY PAIR
const { getKeypairFromEnvironment } = require("@solana-developers/helpers");
dotenv.config();

const keypair = Keypair.generate();
console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);
console.log(`✅ Finished!`);

// LOADING AN EXISTING KEYPAIR FROM AN .ENV FILE
const keypairs = getKeypairFromEnvironment("SECRET_KEY");

console.log(keypairs);
console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`
);

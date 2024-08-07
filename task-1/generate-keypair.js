"use strict";
// import {Keypair} from "@solana/web3.js";
// const config = require('dotenv').config()
//
// const keypair = Keypair.generate()
// console.log(`The public key is: `, keypair.publicKey.toBase58());
// console.log(`The secret key is: `, keypair.secretKey);
// console.log(`✅ Finished!`);
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var web3_js_1 = require("@solana/web3.js");
var secretKey = Uint8Array.from(JSON.parse(process.env["SECRET_KEY"]));
var keypair = web3_js_1.Keypair.fromSecretKey(secretKey);
console.log("\u2705 Loaded keypair securely! Public key is: ".concat(keypair.publicKey.toBase58()));

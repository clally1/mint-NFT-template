import { tigerAddress, tigerAbi } from './contracts/tiger-fight-club.js';
import { wordsAddress, wordsAbi } from './contracts/cryptowords.js';
import { apesAddress, apesAbi } from './contracts/textapes.js';
import { moonAddress, moonAbi } from './contracts/moon.js';
import { web3 } from './connectWallet.js';

export let address;
export let abi;
export let mintPrice;
  address = apesAddress;
  abi = apesAbi;

export let contract = new web3.eth.Contract(abi, address);

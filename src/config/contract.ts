import AtomicToken from "../../artifacts/contracts/example/AtomicToken.sol/AtomicToken.json";
import atomic_token_address from "../../address/AtomicToken.json";

import rentrent_token_address from "../../address/RentRentToken.json";

import baycAbi from "../../external/bayc.json"; // external contract
import nftAbi from "../../external/nft.json";

import MarketContract from "../../artifacts/contracts/example/Market.sol/Market.json";
import market_contract_address from "../../address/Market.json";

export const atomic_token = {
  address: atomic_token_address.address,
  abi: AtomicToken.abi,
};

export const rentrent_token = {
  address: rentrent_token_address.address,
  abi: AtomicToken.abi,
};

export const bayc_contract = {
  address: "0x8FFC91DB3C4cD77250130828a08926CC73B0d366",
  abi: baycAbi,
};

export const ERC721_contract = {
  abi: nftAbi,
};

export const market_contract = {
  address: market_contract_address.address,
  abi: MarketContract.abi,
};

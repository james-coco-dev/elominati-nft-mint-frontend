import Web3 from 'web3';
import { INFURA_URL, NFTContractAddress, TokenContractAddress } from 'config/settings';
import { MAX_INT } from 'constants/settings';

const abi = require('config/abi/nft.json');
const tokenAbi = require('config/abi/token.json');

let web3;

if (typeof window !== 'undefined' && window?.ethereum !== undefined) {
  web3 = new Web3(window.ethereum);
} else {
  web3 = new Web3.providers.HttpProvider(INFURA_URL);
}

// export const getNetworkType = async () => {
//   const userNetwork = await web3.eth.net.getNetworkType();
//   return userNetwork;
// };

export const getBalance = async address => {
  return await web3.eth.getBalance(address);
};

export const getFormatedBalance = balance => {
  if (web3?.utils) {
    return (web3.utils.fromWei(balance || '0', 'ether') * 1).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 3,
    });
  }
  return (balance / 1e18).toFixed(2);
};

export async function getTotalSupply() {
  const web3 = new Web3(INFURA_URL);
  try {
    const nftContract = new web3.eth.Contract(abi, NFTContractAddress);
    const totalSupply = await nftContract.methods.totalSupply().call();
    return totalSupply;
  } catch (error) {
    console.log(error);
  }
  return '';
}

export async function mintAssets(address, count) {
  console.log('address, count ==>', address, count, typeof count);
  const nftContract = new web3.eth.Contract(abi, NFTContractAddress);
  const result = await nftContract.methods.mint(count).send({
    from: address,
    to: NFTContractAddress,
    value: (await nftContract.methods.PRICE().call()) * count,
  });
  return result;
}

export async function mintAssetsWithToken(address, count) {
  console.log('address, count ==>', address, count, typeof count);
  const nftContract = new web3.eth.Contract(abi, NFTContractAddress);
  const result = await nftContract.methods.mintWithToken(count).send({
    from: address,
    to: NFTContractAddress,
  });
  return result;
}

export async function getNFTBalance(address) {
  const web3 = new Web3(INFURA_URL);
  try {
    const nftContract = new web3.eth.Contract(abi, NFTContractAddress);
    const balance = await nftContract.methods.balanceOf(address).call();
    return balance;
  } catch (error) {
    console.log(error);
  }
  return '';
}

export async function approveToken(address) {
  try {
    const tokenContract = new web3.eth.Contract(tokenAbi, TokenContractAddress);
    await tokenContract.methods.approve(NFTContractAddress, MAX_INT).send({
      from: address,
      to: TokenContractAddress,
    });
  } catch (error) {
    console.log('approveToken ==>', error);
  }
}

export async function isApproved(address) {
  const web3 = new Web3(INFURA_URL);
  try {
    const tokenContract = new web3.eth.Contract(tokenAbi, TokenContractAddress);
    const approved = (
      await tokenContract.methods.allowance(address, NFTContractAddress).call()
    ).toString();
    return approved !== '0';
  } catch (error) {
    console.log(error);
  }
  return '';
}

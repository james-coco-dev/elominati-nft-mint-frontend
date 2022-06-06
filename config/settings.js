export const ChainId = parseInt(process.env.CHAIN_ID) || 4;

export const INFURA_API_KEY = process.env.INFURA_API_KEY;

const settings =
  ChainId === 4
    ? {
        TokenContractAddress: '0x753d4172c79F6F6A355015cfDb059208BD99E997',
        NFTContractAddress: '0x5592E42dc52aa414aBF8C6586F5D7a7B4Db87A1c',
        INFURA_URL: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
        OpenseaCollection: 'https://testnets.opensea.io/collection/seainunft-v1',
      }
    : {
        TokenContractAddress: '0xF4D5EB285741E86735dC29Ec79Cb326edfe11906', // TODO:
        NFTContractAddress: '0x70313E35099089154f5361bA68C46128898E83C9',
        INFURA_URL: `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
        OpenseaCollection: 'https://opensea.io/collection/seainunft',
      };

export const INFURA_URL = settings['INFURA_URL'];
export const NFTContractAddress = settings['NFTContractAddress'];
export const TokenContractAddress = settings['TokenContractAddress'];
export const OpenseaCollection = settings['OpenseaCollection'];

export const MAX_SUPPLY = 1805;
export const MAX_MINT_COUNT = 20;
export const TWITTER_LINK = 'https://twitter.com/SeaInuToken';
export const TG_LINK = 'https://t.me/seainu';

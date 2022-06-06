import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { InjectedConnector } from '@web3-react/injected-connector';
import { INFURA_API_KEY } from 'config/settings';

const POLLING_INTERVAL = 12000;

const rpcConfig = {
  RPC_URL_1: `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
  RPC_URL_4: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
};

const RPC_URLS = {
  1: rpcConfig.RPC_URL_1,
  4: rpcConfig.RPC_URL_4,
};

export const walletconnect = new WalletConnectConnector({
  rpc: {
    1: RPC_URLS[1],
    4: RPC_URLS[4],
  },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
});

export const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] });

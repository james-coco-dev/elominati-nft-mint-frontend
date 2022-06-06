import { createContext } from 'react';
const AppContext = createContext({
  themeType: 'dark',
  themeChange: () => {},
  isWalletModalOpened: false,
  setIsWalletModalOpened: () => {},
  balanceData: {},
  setBalanceData: {},
  totalSupply: 0,
  setTotalSupply: () => {},
  balance: 0,
  setBalance: () => {},
});

export { AppContext };

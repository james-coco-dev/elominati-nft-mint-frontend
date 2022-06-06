import { useContext, useState, useEffect } from 'react';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import NetworkIcon from 'components/Icons/NetworkIcon';
import { getBalance, getFormatedBalance } from 'utils/web3';

import ContainedButton from 'components/Buttons/ContainedButton';
import RectButton from 'components/Buttons/RectButton';
import { AppContext } from 'contexts';

import { isEmpty, shortenAddress } from 'utils/utility';
import { ChainId } from 'config/settings';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  userInfo: {
    borderRadius: theme.spacing(4),
    backgroundColor: theme.palette.background.card,
    paddingLeft: 4,
    '& p': {
      color: theme.palette.text.primary,
    },
  },
  account: {
    color: theme.palette.text.primary,
    borderColor: theme.palette.primary.dark,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(0.5, 1.5),
    borderRadius: theme.spacing(4),
    borderWidth: 1,
    borderStyle: 'solid',
  },
  networkError: {
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.main,
    },
  },
  tokenIcon: {
    width: 24,
    height: 24,
    marginRight: 4,
    backgroundColor: theme.palette.primary.contrastText,
    borderRadius: '50%',
  },
}));

export default function Web3Status() {
  const classes = useStyles();
  const { account, connector, error, library, chainId } = useWeb3React();
  const [balance, setBalance] = useState({});

  const { setIsWalletModalOpened, setBalanceData } = useContext(AppContext);

  useEffect(() => {
    if (library && account) {
      getBalanceInfo();
    }
  }, [library, account]);

  const getBalanceInfo = async () => {
    try {
      if (account && library) {
        const balance = (await library.getBalance(account)).toString();

        setBalance({
          ETH: balance,
        });
        setBalanceData({
          ETH: balance,
        });
      }
    } catch (error) {
      console.log('[getBalanceInfo] error ==>', error);
    }
  };

  const toggleWalletModal = () => {
    if (isEmpty(account)) {
      setIsWalletModalOpened(true);
    } else {
      setIsWalletModalOpened(false);
    }
  };

  const switchNetworkHandler = () => {
    try {
      window.web3.currentProvider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: ChainId === 4 ? '0x4' : '0x1' }],
      });
    } catch (error) {
      console.log('[TestHandler] error ==>', error);
    }
  };
  if (account && chainId !== ChainId) {
    return (
      <div className={classes.root}>
        <RectButton className={classes.networkError} onClick={switchNetworkHandler}>
          <Box display='flex' alignItems='center'>
            <NetworkIcon /> &nbsp;{' '}
            <Typography noWrap variant='subtitle2'>
              Switch Network
            </Typography>
          </Box>
        </RectButton>
      </div>
    );
  } else if (account) {
    return (
      <Box
        onClick={toggleWalletModal}
        display='flex'
        alignItems='center'
        className={classes.userInfo}>
        <img className={classes.tokenIcon} src='/img/eth.svg' alt='eth' />
        <Typography noWrap>{getFormatedBalance(balance['ETH']) || 'N/A'} &nbsp;</Typography>
        <Typography className={classes.account}>{shortenAddress(account)}</Typography>
      </Box>
    );
  } else {
    return (
      <div className={classes.root}>
        <RectButton onClick={toggleWalletModal}>
          <Typography noWrap variant='subtitle2'>
            Connect Wallet
          </Typography>
        </RectButton>
      </div>
    );
  }
}

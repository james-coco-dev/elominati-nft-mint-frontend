import { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from 'components/UI/OutlinedInput';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useWeb3React } from '@web3-react/core';
import { toast } from 'react-toastify';

import RoundButton from 'components/Buttons/RadiusButton';
import RectButton from 'components/Buttons/RectButton';
import Web3Status from 'components/Web3Status';
import { shortenAddress } from 'utils/utility';
import { ChainId, MAX_SUPPLY, MAX_MINT_COUNT } from 'config/settings';
import { AppContext } from 'contexts';
import {
  mintAssets,
  mintAssetsWithToken,
  getNFTBalance,
  approveToken,
  isApproved,
} from 'utils/web3';

const useStyles = makeStyles(theme => ({
  mintContainer: {
    position: 'relative',
    width: '100vw',
    padding: theme.spacing(7, 2),
    backgroundColor: theme.palette.background.dark,
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4, 2),
    },
  },
  accountInfo: {
    paddingBottom: theme.spacing(3),
    borderBottom: `1px solid #fff`,
    maxWidth: 720,
    margin: '0 auto',
  },
  inputWrapper: {
    maxWidth: 1000,
    margin: '20px auto 0',
  },
  infoLine: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(3),
  },
  inputRoot: {
    '&::focus-visible': {
      border: `1px solid #fff`,
    },
  },
  input: {
    border: `1px solid #fff`,
  },
  actionButtons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    '& button': {
      margin: theme.spacing(1, 0),
    },
  },
}));

export default function MintSection() {
  const classes = useStyles();
  const { account, chainId } = useWeb3React();
  const [count, setCount] = useState(1);
  const [approved, setApproved] = useState(false);
  const { totalSupply, balance, setBalance } = useContext(AppContext);

  const inputChangeHandler = event => {
    event.stopPropagation();
    setCount(parseInt(event.target.value));
  };

  async function fetchBalance(address) {
    try {
      const balance = await getNFTBalance(address);
      setBalance(balance);
    } catch (error) {
      console.log(error);
    }
  }

  async function checkAllowance(address) {
    try {
      const result = await isApproved(address);
      setApproved(result);
    } catch (error) {
      console.log(error);
    }
  }

  async function approveHandler() {
    console.log('approveHandler called');
    try {
      await approveToken(account);
      checkAllowance(account);
    } catch (error) {
      console.log(error);
    }
  }

  async function mintHandler() {
    if (count <= 0 || count > MAX_MINT_COUNT) {
      toast.error('Invalid amount.');
      return;
    }

    try {
      const result = await mintAssets(account, count);
      console.log('result ==>', result.transactionHash);
      const link = `https://${ChainId === 4 ? 'rinkeby.' : ''}etherscan.io/tx/${
        result.transactionHash
      }`;
      toast.success(
        <a href={link} target='_blank'>
          'Succeed in minting NFTs!'
        </a>,
      );
      fetchBalance(account);
    } catch (error) {
      console.log('[mintHandler] error ==>', error);
      toast.error(error.message);
    }
  }

  async function mintWithTokenHandler() {
    if (count <= 0 || count > MAX_MINT_COUNT) {
      toast.error('Invalid amount.');
      return;
    }

    try {
      const result = await mintAssetsWithToken(account, count);
      console.log('result ==>', result.transactionHash);
      const link = `https://${ChainId === 4 ? 'rinkeby.' : ''}etherscan.io/tx/${
        result.transactionHash
      }`;
      toast.success(
        <a href={link} target='_blank'>
          'Succeed in minting NFTs!'
        </a>,
      );
      fetchBalance(account);
    } catch (error) {
      console.log('[mintHandler] error ==>', error);
      toast.error(error.message);
    }
  }

  useEffect(() => {
    if (account) {
      fetchBalance(account);
      checkAllowance(account);
    }
  }, [account]);

  return (
    <div className={classes.mintContainer} id='mint'>
      {!account ? (
        <div>
          <Typography>WALLET NOT CONNECTED..</Typography>
          <br />
          <RoundButton bg='#30F58B'>Connect Wallet</RoundButton>
        </div>
      ) : (
        <div className={classes.accountInfo}>
          <Typography>{shortenAddress(account)}</Typography>
          <br />
          <br />
          <Typography>YOUR SeaInu NFTs: {balance}</Typography>
        </div>
      )}
      <br />
      <Typography variant='h3'>Mint Sea Inu</Typography>
      <div className={classes.inputWrapper}>
        <div className={classes.infoLine}>
          <Typography>
            MINTED: {totalSupply}/{MAX_SUPPLY}
          </Typography>
          <Typography>PRICE: 0.05ETH Or 5000 $SEAINU</Typography>
          <Typography>MAX PER TRANSACTION: {MAX_MINT_COUNT}</Typography>
        </div>
        <OutlinedInput value={count} type='number' min={1} max={20} onChange={inputChangeHandler} />
        <br />
        <br />
        {account && ChainId === chainId && (
          <div className={classes.actionButtons}>
            <RectButton onClick={mintHandler}>Mint With ETH</RectButton>
            {!approved && <RectButton onClick={approveHandler}>Approve</RectButton>}
            <RectButton onClick={mintWithTokenHandler}>Mint With SEAINU</RectButton>
          </div>
        )}
        {account && ChainId !== chainId && (
          <Box display='flex' justifyContent='center'>
            <Web3Status />
          </Box>
        )}
      </div>
      <br />
      <Typography>Mint NFT with ETH or Mint NFT with $SEAINU after Approval.</Typography>
    </div>
  );
}

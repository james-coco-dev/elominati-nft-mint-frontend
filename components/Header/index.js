// import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
// import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import clsx from 'clsx';

import DesktopMenu from './DesktopMenu';
import { commonUseStyles } from 'styles/use-styles';
// import { getNetworkType } from 'utils/web3';

const useStyles = makeStyles(theme => ({
  appBar: {
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    [theme.breakpoints.down('sm')]: {
      paddingRight: 0,
    },
    [theme.breakpoints.down(340)]: {
      padding: 0,
    },
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    zIndex: theme.zIndex.drawer + 3,
    padding: theme.spacing(0, 1, 0, 4.5),
    backgroundColor: `#00000080`,
    backdropFilter: 'blur(4px)',
    minHeight: theme.spacing(5),
    // borderBottom: `solid 1px ${theme.palette.background.main}`,
    boxShadow:
      '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%) !important',
    borderBottom: `none`,
    backdropFilter: 'blur(8px)',
  },
  notificationBar: {
    backgroundColor: theme.palette.error.light,
    padding: theme.spacing(0.5),
    textAlign: 'center',
  },
  flex: {
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'contents',
    },
    width: '100%',
    paddingLeft: 0,
    paddingRight: 0,
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  horizontalFlex: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  menuIcon: {
    [theme.breakpoints.up('sm')]: {
      position: 'fixed',
      left: theme.spacing(3),
      top: theme.spacing(0.5),
    },
  },
  height: {
    height: '100%',
  },
}));

const TopAppBar = () => {
  const classes = useStyles();
  const commonClasses = commonUseStyles();

  const context = useWeb3React();
  const { account, chainId } = context;

  // const [networkType, setNetworkType] = useState();

  // const init = async () => {
  //   const networkType = await getNetworkType();
  //   setNetworkType(networkType);
  // };

  // useEffect(() => {
  //   if (account && chainId) {
  //     init();
  //   }
  // }, [account, chainId]);

  const showNetworkWarning = account && chainId !== 1;

  return (
    <>
      {/* {showNetworkWarning && (
        <Box className={classes.notificationBar}>
          <Typography>
            Your wallet is connected to the {networkType ? networkType.toUpperCase() : 'Private'}{' '}
            network. Please switch to Ethereum Mainnet.
          </Typography>
        </Box>
      )} */}
      <AppBar position='sticky' className={classes.appBar}>
        <Toolbar className={classes.flex}>
          <div
            className={clsx(classes.horizontalFlex, commonClasses.responsiveWidth, classes.height)}>
            <DesktopMenu />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TopAppBar;

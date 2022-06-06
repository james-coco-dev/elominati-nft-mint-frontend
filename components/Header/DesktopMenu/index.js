import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import TopAppBarLeft from './TopAppBarLeft';
import TopAppBarMenu from './TopAppBarMenu';
import TopAppBarRight from './TopAppBarRight';
import { TOP_BAR_MENUS } from 'constants/links/top-menu-items';
import MobileMenu from 'components/Header/MobileMenu';
import Web3Status from 'components/Web3Status';

import OpenSeaIcon from 'components/Icons/OpenSeaIcon';
import TwitterIcon from 'components/Icons/TwitterIcon';
import TGIcon from 'components/Icons/TGIcon';

import { OpenseaCollection, TWITTER_LINK, TG_LINK } from 'config/settings';

const useStyles = makeStyles(theme => ({
  menu: {
    // display: 'flex',
    height: '100%',
    margin: theme.spacing(0, 1, 0, 2),
    flexGrow: 1,
  },
  iconMenu: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: 12,
    color: '#fff',
    marginRight: 12,
    '& a': {
      alignItems: 'center',
      display: 'flex',
      '&:hover': {
        color: '#39b1d9',
      },
    },
    '& svg': {
      width: 36,
      height: 36,
    },
  },
}));
const DesktopMenu = () => {
  const classes = useStyles();

  return (
    <>
      <MobileMenu />
      <TopAppBarLeft />
      <Hidden mdDown implementation='css' className={classes.menu}>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          width='100%'
          height={1}>
          <TopAppBarMenu menuItems={TOP_BAR_MENUS} />
          <div className={classes.iconMenu}>
            <a href={OpenseaCollection} target='_blank'>
              <OpenSeaIcon />
            </a>
            <a href={TWITTER_LINK} target='_blank'>
              <TwitterIcon />
            </a>
            <a href={TG_LINK} target='_blank'>
              <TGIcon />
            </a>
          </div>
          <Web3Status />
        </Box>
      </Hidden>
      <TopAppBarRight />
    </>
  );
};

export default DesktopMenu;

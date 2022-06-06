import React from 'react';
import clsx from 'clsx';
import { useWeb3React } from '@web3-react/core';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { isEmpty } from 'utils/utility';
import PAGES from 'constants/links/pages';

const useStyles = makeStyles(theme => ({
  // selectedItem: {
  //   color: theme.palette.primary.contrastText,
  //   backgroundColor: `${theme.palette.background.main} !important`,
  // },
  menuFont: {
    [theme.breakpoints.down(1360)]: {
      fontSize: theme.spacing(1.8),
    },
    margin: theme.spacing(0, 1),
    // fontSize: theme.spacing(2.25),
    color: theme.palette.text.primary,
    fontWeight: 700,
    // fontSize: theme.spacing(2.5),
    fontSize: '20px !important',
    '& p': {
      fontSize: '20px !important',
    },
  },
  subMenuItem: {
    lineHeight: 1.2,
    padding: theme.spacing(5 / 8, 1),
    '&:hover': {
      backgroundColor: '#0e1c2f',
      backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))',
      transition: 'all .2s ease-in-out',
    },
  },
  navSubmenu: {
    display: 'none',
  },
  listItem: {
    display: 'flex',
    position: 'relative',
    // padding: theme.spacing(0, 1),
    // height: '64px',
    '& a': {
      textDecoration: 'none',
    },
    '&:hover $navSubmenu': {
      display: 'block',
    },
  },

  navSubmenu: {
    fontWeight: 300,
    display: 'none',
    position: 'absolute',
    width: 260,
    backgroundColor: theme.palette.background.default,
    marginTop: 0,
    listStyle: 'none',
    padding: theme.spacing(1.5, 0),
    borderRadius: theme.spacing(1),
  },
}));

const SubMenu = ({ items }) => {
  const classes = useStyles();
  return (
    <div className={classes.navSubmenu}>
      {items.map(item => (
        <Link href={item.url} key={item.label}>
          <a
            className={classes.navSubmenuItem}
            target={item?.url?.includes('http') ? '_blank' : ''}>
            <Typography variant='h4' className={clsx(classes.menuFont, classes.subMenuItem)}>
              {item.label}
            </Typography>
          </a>
        </Link>
      ))}
    </div>
  );
};

const TopAppBarMenuItem = ({ selected, menuItem, onClick }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const context = useWeb3React();
  const { account } = context;

  let pathname = menuItem.url;
  const isExternal = pathname?.includes('http');
  if (menuItem.id === 'ACCOUNT') {
    if (!isEmpty(account)) {
      pathname = `${pathname}/${account}`;
    } else {
      pathname = PAGES.UNLOCK.url;
    }
  }

  const clickHandler = () => {
    const titleElement = document.getElementById(pathname.replace('#', ''));
    if (titleElement) titleElement.scrollIntoView({ behavior: 'smooth' });
    onClick && onClick();
  };

  return (
    // <Link href={pathname}>
    //   <a className={classes.linkItem} target={isExternal ? '_blank' : ''}>
    <div>
      <ListItem
        button
        classes={{
          // selected: classes.selectedItem,
          root: classes.listItem,
        }}
        selected={selected}
        onClick={clickHandler}>
        {/* {menuItem.icon} */}
        <ListItemText>
          <Typography className={classes.menuFont} noWrap>
            {menuItem.text}
          </Typography>
        </ListItemText>
        {anchorEl ? menuItem.antiBadgeIcon : menuItem.badgeIcon}
      </ListItem>
    </div>
  );
};

export default TopAppBarMenuItem;

import clsx from 'clsx';
import Link from 'next/link';
import { useWeb3React } from '@web3-react/core';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { isEmpty } from 'utils/utility';
import PAGES from 'constants/links/pages';

const useStyles = makeStyles(theme => ({
  // linkItem: {
  //   textDecoration: 'none',
  //   color: 'unset',
  // },
  listItem: {
    padding: theme.spacing(0.5, 1),
    marginBottom: theme.spacing(1),
    textDecoration: 'none !important',
  },
  selectedItem: {
    color: theme.palette.text.primary,
    backgroundColor: `${theme.palette.background.main} !important`,
  },
  unselectedIcon: {
    color: theme.palette.text.secondary,
  },
  selectedIcon: {
    color: theme.palette.primary.main,
  },
  menuItem: {
    fontWeight: 600,
    textAlign: 'center',
  },

  // subMenuItem: {
  //   lineHeight: 1.2,
  //   padding: theme.spacing(5 / 8, 1),
  //   '&:hover': {
  //     backgroundColor: '#0e1c2f',
  //     backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))',
  //     transition: 'all .2s ease-in-out',
  //   },
  // },
  linkItem: {
    textDecoration: 'none',
  },
  // listItem: {
  //   display: 'flex',
  //   position: 'relative',
  //   padding: (0, 10, 0, 10),
  //   height: '64px',
  //   '& a': {
  //     textDecoration: 'none',
  //   },
  // },

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
            <Typography variant='h5' className={clsx(classes.menuFont, classes.subMenuItem)}>
              {item.label}
            </Typography>
          </a>
        </Link>
      ))}
    </div>
  );
};

const MenuPanelListItem = ({ selected, menuItem, onClick }) => {
  const classes = useStyles();

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

  return (
    <Link href={pathname}>
      <a className={classes.linkItem} target={isExternal ? '_blank' : ''}>
        <ListItem
          button
          className={classes.listItem}
          classes={{
            selected: classes.selectedItem,
          }}
          selected={selected}
          onClick={onClick}>
          {/* <ListItemIcon className={selected ? classes.selectedIcon : classes.unselectedIcon}>
            {menuItem.icon}
          </ListItemIcon> */}
          <ListItemText>
            <Typography variant='subtitle1' className={classes.menuItem}>
              {menuItem.text}
            </Typography>
          </ListItemText>
        </ListItem>
        {/* {menuItem.subMenus && <SubMenu items={menuItem.subMenus} />} */}
      </a>
    </Link>
  );
};

export default MenuPanelListItem;

import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';

import TopAppBarMenuItem from './TopAppBarMenuItem';

const useStyles = makeStyles(theme => ({
  menuItem: {
    flexDirection: 'row',
    minHeight: '100%',
    padding: 0,
    justifyContent: 'flex-end !important',
    marginRight: theme.spacing(2),
  },
}));

const TopAppBarMenu = ({ menuItems }) => {
  const classes = useStyles();

  return (
    <ListItem className={classes.menuItem}>
      {menuItems.map(menuItem => (
        <TopAppBarMenuItem key={menuItem.id} selected={false} menuItem={menuItem} />
      ))}
    </ListItem>
  );
};

export default TopAppBarMenu;

import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Web3Status from 'components/Web3Status';
import MenuPanelListItem from './MenuPanelItem';
import { OpenseaCollection, TWITTER_LINK, TG_LINK } from 'config/settings';

import OpenSeaIcon from 'components/Icons/OpenSeaIcon';
import TwitterIcon from 'components/Icons/TwitterIcon';
import TGIcon from 'components/Icons/TGIcon';

const useStyles = makeStyles(theme => ({
  title: {
    marginLeft: theme.spacing(2),
  },
  iconMenu: {
    display: 'grid',
    placeItems: 'center',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: 12,
    color: '#fff',
    marginRight: 12,
    '& a': {
      alignItems: 'center',
      display: 'flex',
    },
    '& svg': {
      width: 36,
      height: 36,
    },
  },
}));

const MenuPanel = ({ title, menuItems, onItemClick }) => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.title}>{title}</Typography>
      <List>
        {menuItems.map(menuItem => (
          <MenuPanelListItem
            key={menuItem.id}
            selected={false}
            menuItem={menuItem}
            onClick={onItemClick}
          />
        ))}
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
      </List>
      <Box display='flex' mt={3} justifyContent='center'>
        <Web3Status />
      </Box>
    </>
  );
};

export default MenuPanel;

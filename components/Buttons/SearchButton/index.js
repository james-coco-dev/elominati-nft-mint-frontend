
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import ListItem from '@material-ui/core/ListItem';

import SearchIcon from 'components/Icons/SearchIcon';

const useStyles = makeStyles(theme => ({
  root: {
    height: '64px',
    paddingTop: 0,
    paddingBottom: 0,
  },
  selectedIcon: {
    color: theme.palette.primary.main
  },
  selectedItem: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      backgroundColor: 'transparent !important'
    },
    color: theme.palette.primary.contrastText,
    backgroundColor: `${theme.palette.background.main} !important`
  },
  padding: {
    marginLeft: theme.spacing(2)
  },
  listItem: {
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1)
    },
    height: '64px',
    paddingTop: 0,
    paddingRight:theme.spacing(1.5),
    paddingLeft : theme.spacing(1.5),
    paddingBottom: 0,
  }
}));

const SearchButton = ({ selected, onClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ListItem
        button
        classes={{
          selected: classes.selectedItem,
          root: classes.listItem
        }}
        selected={selected}
        onClick={onClick}>
        <SearchIcon viewBox={'0 0 20 24'} />
      </ListItem>
    </div>
  );
};

export default SearchButton;

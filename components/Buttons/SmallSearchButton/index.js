
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';

import SearchIcon from 'components/Icons/SearchIcon';
import { theme } from 'styles/theme';

const useStyles = makeStyles(theme => ({
  selectedItem: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.background.main
  },
  padding: { marginLeft: theme.spacing(2) },
  Item: {
    paddingTop: 0,
    paddingBottom: 6,
    height: '100%',
    width: theme.spacing(4),
  },
  searchIcon: {
    color: theme.palette.text.caption,
    '&:hover': {
      color: theme.custom.palette.hover,
    }
  }
}));

const SearchButton = ({ onClick }) => {
  const classes = useStyles(theme);

  return (
    <Hidden smDown implementation='css'>
      <IconButton
        onClick={onClick}
        classes={{
          root: classes.Item
        }}>
        <SearchIcon className={classes.searchIcon} viewBox={'0 -4 20 31'} />
      </IconButton>
    </Hidden>
  );
};

export default SearchButton;

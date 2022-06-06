import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginLeft: 'auto',
    background: 'none !important',
  },
  padding: {
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(1),
    },
    // display: 'flex',
    // justifyContent: 'flex-end',
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(0),
    padding: 0,
    height: '100%',
  },
}));

const TopAppBarRight = () => {
  const classes = useStyles();

  return <div></div>;
};

export default TopAppBarRight;

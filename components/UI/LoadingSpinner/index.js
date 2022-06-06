import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  loader: {
    display: 'inline-block',
    width: 80,
    height: 80,

    '&::after': {
      content: '" "',
      display: 'block',
      width: 64,
      height: 64,
      margin: 8,
      borderRadius: '50%',
      border: '6px solid #fff',
      borderColor: '#fff transparent #fff transparent',
      animation: '$lds-dual-ring 1.2s linear infinite',
    },
  },

  '@keyframes lds-dual-ring': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
}));

export default function LoadingSpinner() {
  const classes = useStyles();

  return <div className={classes.loader}></div>;
}

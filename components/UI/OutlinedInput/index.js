import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  inputStyle: {
    width: '100%',
    padding: theme.spacing(1, 2),
    outline: 'none',
    border: '2px solid #fff',
    backgroundColor: 'transparent',
    color: '#fff',
    fontSize: 24,
    textAlign: 'right',
  },
}));

export default function OutlinedInput({ ...props }) {
  const classes = useStyles();

  return <input className={classes.inputStyle} {...props} />;
}

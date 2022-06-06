import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    width: '100vw',
    padding: theme.spacing(8, 9),
    backgroundColor: '#02456e', // stheme.palette.background.dark,
    color: '#fff',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(6, 2),
    },
  },
  title: {
    color: '#3baada',
  },
  description: {
    fontWeight: 700,
    // fontSize: 24,
    maxWidth: 700,
    margin: '0 auto !important',
  },
}));

export default function Section1({}) {
  const classes = useStyles();
  return (
    <div className={classes.container} id='tokenomics'>
      <Typography variant='h4' className={classes.title} gutterBottom>
        About SeaInu Token
      </Typography>
      <Typography variant='h5' className={classes.description}>
        SeaInu is a truly decentralised community-driven project that allows control of the
        development process, resources and decision making authority, to directly be in the hands
        community.
      </Typography>

      <br />

      <Typography variant='h4' className={classes.title} gutterBottom>
        Token Metrics
      </Typography>
      <Typography variant='h5' className={classes.description}>
        Total Supply: 1 Trillion $SEAINU <br />
        Tax: 10% on Buys and 10% on Sales
      </Typography>
    </div>
  );
}

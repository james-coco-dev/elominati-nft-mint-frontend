import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    width: '100vw',
    padding: theme.spacing(8, 9),
    backgroundColor: '#2d5d99',
    color: '#000',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(8, 3),
    },
  },
  textWrapper: {
    maxWidth: 800,
    margin: '0 auto',
    fontWeight: 700,
  },
  purple: {
    color: theme.palette.text.purple,
  },
  green: {
    color: theme.palette.text.green,
  },
}));

export default function Section3({}) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.textWrapper}>
        <Typography variant='h5'>
          The <span className={classes.green}>1805 unique</span> and powerful <br /> SeaInuNFTs are
          waiting for you.
        </Typography>
        <br />
        <br />
        <Typography variant='h5'>
          It’s our time to hold token and mint NFTs to become <br />
          the most famous <span className={classes.green}>NFT collection</span> in the world.
        </Typography>
      </div>
    </div>
  );
}

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { TokenContractAddress } from 'config/settings';

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    width: '100vw',
    padding: theme.spacing(6, 9),
    backgroundColor: theme.palette.background.main,
    backgroundImage: 'url(/img/bg1.png)',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(6, 1),
    },
  },
  title: {
    fontWeight: 400,
    color: '#fff',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  description: {
    fontWeight: 700,
    color: theme.palette.text.green,
    fontSize: '2rem !important',
    textAlign: 'left',
    [theme.breakpoints.up('sm')]: {
      fontSize: '3rem',
    },
  },
  steps: {
    fontWeight: 700,
    color: theme.palette.text.green,
    fontSize: '1.5rem !important',
    textAlign: 'left',
    margin: theme.spacing(2, 0),
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.25rem',
      lineHeight: 1.75,
    },
  },
  uniswap: {
    width: 500,
    minHeight: 560,
    borderRadius: 12,
    [theme.breakpoints.down('md')]: {
      width: '90%',
      minHeight: 560,
    },
  },
}));

export default function Section2({}) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant='h3' className={classes.title} gutterBottom>
        How To Buy
      </Typography>
      <div className={classes.row}>
        <div>
          <Typography variant='h3' className={classes.description} gutterBottom>
            Follow the instructions
          </Typography>
          <Typography variant='h5' className={classes.steps}>
            1. Create a Wallet (e.g MetaMask) <br />
            2. Put ETH into your wallet. <br />
            3. Click on import SeaInu in Uniswap. <br />
            4. Connect your Wallet. <br />
            5. Set Slippage to 12-14% <br />
            6. Swap your ETH for SeaInu <br />
            7. Welcome to #SeaInu ! <br />
            8. Mint NFT with ETH or Token after Approval <br />
          </Typography>
        </div>
        <iframe
          className={classes.uniswap}
          src='https://app.uniswap.org/#/swap?theme=light&amp;&amp;exactField=input&amp;exactAmount=1&amp;&amp;inputCurrency=eth&amp;&amp;outputCurrency=0xF4D5EB285741E86735dC29Ec79Cb326edfe11906 '
          frameborder='0 '></iframe>
        {/* <iframe
          className={classes.uniswap}
          src='https://app.uniswap.org/#/swap?theme=light&amp;&amp;exactField=input&amp;exactAmount=1&amp;&amp;inputCurrency=eth&amp;&amp;outputCurrency=0x5bddbfdc228e1bbdb9ef5ca1dc56b54c4d6d6621 '
          frameborder='0 '></iframe> */}
        {/* <iframe
          className={classes.uniswap}
          src={`https://app.uniswap.org/#/swap?theme=light&amp;&amp;exactField=input&amp;exactAmount=1&amp;&amp;inputCurrency=eth&amp;&amp;outputCurrency=0xEcc459462169DaE37E82b7c9A237C14CB3645f38 `}
        frameborder='0 '></iframe> */}
      </div>
    </div>
  );
}

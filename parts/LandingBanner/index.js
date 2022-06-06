import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import RoundButton from 'components/Buttons/RadiusButton';
import { OpenseaCollection } from 'config/settings';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    minHeight: '100vh',
    // height: `calc(100vh - 68px)`,
    // backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 151.74%), url(/img/landing-banner.jpg)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    [theme.breakpoints.down('md')]: {
      // paddingTop: 100,
      height: `calc(100vh - 80px)`,
    },
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexGrow: 1,
    gap: 12,
    zIndex: 1,
    textAlign: 'center',
    width: '100vw',
    height: '100vh !important',
    padding: theme.spacing(1),
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 151.74%)`,
  },
  title: {
    color: '#fff',
    maxWidth: 1000,
    margin: '0 auto !important',
    [theme.breakpoints.down('md')]: {
      fontSize: '32px !important',
    },
  },
  description: {
    maxWidth: 720,
    margin: '24px auto !important',
    fontSize: '1.5rem !important',
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem !important',
    },
  },
  blue: {
    color: theme.palette.text.blue,
  },
  yellow: {
    color: theme.palette.text.yellow,
  },
  green: {
    color: theme.palette.text.green,
  },
  openSeaButton: {
    height: 60,
  },
  chartButton: {
    height: 60,
    marginLeft: 20,
  },
  videoStyle: {
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#004673',
  },
}));

export default function LandingBanner({}) {
  const classes = useStyles();

  return (
    <div className={classes.root} id='home'>
      {/* <Image
        className={classes.landingImage}
        layout='fill'
        objectFit='cover'
        src='/img/landing-banner.jpg'
        alt='landing-banner'
      /> */}
      <video
        id='video'
        width='100%'
        height='100%'
        className={classes.videoStyle}
        autoPlay
        loop
        muted
        playsInline>
        <source src={'/video/landing-video.mp4'} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className={classes.textWrapper}>
        <Typography variant='h3' className={classes.title}>
          <br />
          <span className={classes.green}>Sea Inu</span> is a decentralized ERC-20 Cryptocurrency
          token. <br />
          <span className={classes.green}>Sea Inu NFTs</span> are our collections of hand-crafted
          NFTs that will be completely tradeable on Opensea.
        </Typography>
        <Typography variant='h4' className={classes.description}></Typography>
        <div>
          <a
            href={
              'https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xf4d5eb285741e86735dc29ec79cb326edfe11906&use=V2'
            }
            target='_blank'>
            <RoundButton bg='#30F58B' color='#000000' className={classes.openSeaButton}>
              BUY SEAINU TOKEN
            </RoundButton>
          </a>
          <a
            href={
              'https://www.dextools.io/app/ether/pair-explorer/0xb4eb4ebbbf8225189b6b621f2cec47131e14ee29'
            }
            target='_blank'>
            <RoundButton bg='#3ea5db' color='#000000' className={classes.chartButton}>
              CHART
            </RoundButton>
          </a>
        </div>
      </div>
    </div>
  );
}

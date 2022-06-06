import Image from 'next/image';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ColorEggIcon from 'components/Icons/ColorEggIcon';

const list = [
  {
    title: 'Launch SeaInu Token',
    text: `SeaInu Token is launching in Jan 2022. It´s the first event for our community.
    The $SEAINU token can be purchased on Uniswap and LP will be locked on Unicrypt.
    `,
    color: '#FBB03B',
  },
  {
    title: 'Launch SeaInu NFT',
    text: `SeaInu NFT will be available right after ERC20 token launch. Holders can buy NFT with $SEAINU token and ETH and trade on Opensea.
    `,
    color: '#EB6215',
  },
  {
    title: (
      <>
        Marketing campaign <br /> with real life influencers
      </>
    ),
    text: `Marketing is an effective way to connect with NFT lovers. Through strategical partnerships with real life Influencers the Sea Inu NFT will succeed in the crypto space and outside. The interest of non crypto investors will emerge.
    With Marketing we will strengthen our efforts to grow the community.`,
    color: '#32A111',
  },
  {
    title: 'CG/CMC Listing',
    text: (
      <>
        We will list our token and nft to Coingecko and CoinMarketCap.{' '}
        {/* <a
          href='https://www.brighthope.org/giveachicken/#start'
          target='_blank'
          style={{ textDecoration: 'underline' }}>
          platform
        </a> */}
        We will make a fundraising with our community. Sea Inu will change lifes in crypto world.
      </>
    ),
    color: '#ffec09',
  },
  {
    title: <>Events for Token and NFT Holders</>,
    text: `We will setup Discord server to announce top holders and winners who hold rare NFTs. Every 100th NFT buyers will receive ETH as rewards.`,
    color: '#006837',
  },
  {
    title: 'SeaInu DAO',
    text: `
      As a SeaInu NFT owner, you’ll become a member of the SeaInu DAO. This allows you to take part in deciding how the SeaInu Community Treasury funds will be used and where the SeaInu is heading next.
      Remember, we run a collaborative road map, all further goals will be determined by the imagination of the DAO.
      Our NFT collection will be linked to our soon to be released play-to-earn games.
    `,
    color: '#F7931E',
  },
];

const useStyles = makeStyles(theme => ({
  roadMapContainer: {
    position: 'relative',
    width: '100vw',
    padding: theme.spacing(6, 9),
    backgroundPosition: 'center top',
    backgroundSize: '100% 128%',
    backgroundImage: 'url(/img/roadmap-back.svg)',
    backgroundColor: '#2d5d99',
    color: '#000',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(6, 2),
    },
  },
  rect: {
    position: 'relative',
    // backgroundColor: `rgba(239, 220, 202, 0.8)`,
    backgroundColor: '#3879cbcc',
    borderRadius: 10,
    padding: theme.spacing(2, 2),
    margin: theme.spacing(3, 'auto'),
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif !important`,
    maxWidth: 720,
    zIndex: 10,
    transition: 'all easy-in-out 0.4s',
    border: '1px solid transparent',
    '&:hover': {
      backgroundColor: '#3879cb',
      border: '1px solid #bbb',
    },
  },
  title: {
    color: '#fff', // theme.palette.text.darkBrown,
  },
  gradientLine: {
    position: 'absolute',
    width: 4,
    bottom: 260,
    left: 'calc(50% - 2px)',
    top: 160,
    background: `linear-gradient(180deg, #FAFF06 0%, #EB6215 27.6%, #925111 46.35%, #0A6085 68.23%, #006837 82.81%, #F7931E 100%)`,
    [theme.breakpoints.down('md')]: {
      bottom: 320,
    },
  },
  eggIcon: {
    position: 'relative',
    zIndex: 10,
  },
  eggStep: {
    position: 'absolute',
    width: 280,
    borderRadius: '50%',
    [theme.breakpoints.down('md')]: {
      width: 120,
    },
  },
  eggStep1: {
    right: 120,
    top: 240,
    transform: 'rotateY(180deg)',
    [theme.breakpoints.down('md')]: {
      right: 20,
      top: 500,
    },
  },
  eggStep2: {
    left: 120,
    top: 680,
    [theme.breakpoints.down('md')]: {
      left: 20,
      top: 800,
    },
  },
  eggStep3: {
    right: 120,
    bottom: 380,
    transform: 'rotateY(180deg)',
    [theme.breakpoints.down('md')]: {
      right: 20,
      bottom: 650,
    },
  },
  eggStep4: {
    left: 20,
    bottom: 0,
    [theme.breakpoints.down('md')]: {
      left: 20,
      bottom: -20,
    },
  },
}));

export default function RoadMapSection({}) {
  const classes = useStyles();
  return (
    <div className={classes.roadMapContainer} id='roadmap'>
      <div className={classes.gradientLine} />
      <Typography variant='h3' className={classes.title}>
        Roadmap <br />
        <br />
      </Typography>
      <div className={classes.eggsLine}>
        {list.map((item, index) => (
          <div key={index}>
            <ColorEggIcon color={item.color} className={classes.eggIcon} />
            <div className={classes.rect}>
              <Typography variant='h5' gutterBottom style={{ color: item.color }}>
                {item.title}
              </Typography>
              <Typography>{item.text}</Typography>
            </div>
          </div>
        ))}
      </div>
      <img
        className={clsx(classes.eggStep, classes.eggStep1)}
        src='/img/inu-step2.png'
        alt='inu-step1'
      />
      <img
        className={clsx(classes.eggStep, classes.eggStep2)}
        src='/img/inu-step1.png'
        alt='inu-step2'
      />
      <img
        className={clsx(classes.eggStep, classes.eggStep3)}
        src='/img/inu-step3.png'
        alt='inu-step3'
      />
      <img
        className={clsx(classes.eggStep, classes.eggStep4)}
        src='/img/inu-step5.png'
        alt='inu-step4'
      />
    </div>
  );
}

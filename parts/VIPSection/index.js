import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import RoundButton from 'components/Buttons/RadiusButton';
import { OpenseaCollection } from 'config/settings';

const videoEggs = [
  {
    name: 'Bronze Metal',
    imageUrl: '/img/eggs/Bronze Metal.mp4',
  },
  {
    name: 'Light Pearlescent Metal',
    imageUrl: '/img/eggs/Light Pearlescent Metal.mp4',
  },
  {
    name: 'Ghost Metal',
    imageUrl: '/img/eggs/Ghost Metal.mp4',
  },
  {
    name: 'Chrome Metal',
    imageUrl: '/img/eggs/Chrome Metal.mp4',
  },
];

const useStyles = makeStyles(theme => ({
  vipContainer: {
    position: 'relative',
    width: '100vw',
    padding: theme.spacing(6, 3),
    backgroundColor: `#010001`,

    textAlign: 'center',
  },
  eggsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    placeItems: 'center',
    width: '100%',
    margin: '20px auto',
    [theme.breakpoints.up('md')]: {
      maxWidth: 800,
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: 1200,
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
    },
  },
  title: {
    fontWeight: 700,
    color: theme.palette.text.yellow,
  },
  eggVideo: {
    width: 140,
    height: 184,
    [theme.breakpoints.up('md')]: {
      width: 271,
      height: 325,
    },
  },
}));

export default function VIPSection({}) {
  const classes = useStyles();
  return (
    <div className={classes.vipContainer}>
      <Typography variant='h4' className={classes.title}>
        VIP
      </Typography>
      <div className={classes.eggsContainer}>
        {videoEggs.map(egg => (
          <video
            key={egg.imageUrl}
            width='271'
            height='325'
            className={classes.eggVideo}
            autoPlay
            loop
            muted
            playsInline>
            <source src={egg.imageUrl} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
      <a href={OpenseaCollection} target='_blank'>
        <RoundButton>View on Opensea</RoundButton>
      </a>
    </div>
  );
}

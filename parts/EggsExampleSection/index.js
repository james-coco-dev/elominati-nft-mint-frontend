import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const inuList = [
  '7.png',
  '9.png',
  '33.png',
  '37.png',
  '66.png',
  '95.png',
  '274.png',
  '292.png',
  '304.png',
  '85.png',
  '268.png',
  '31.png',
  '99.png',
  '265.png',
  '105.png',
  '294.png',
  '319.png',
  '72.png',
];

const useStyles = makeStyles(theme => ({
  exampleContainer: {
    position: 'relative',
    width: '100%',
    backgroundColor: '#FAF1DA',
    color: '#000',
    textAlign: 'center',
  },
  titleWrapper: {
    background: theme.palette.background.main,
    padding: theme.spacing(8, 1),
    fontWeight: 700,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(8, 9),
    },
  },
  eggsWrapper: {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: '1fr 1fr 1fr',
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
    },
  },
  eggStyle: {
    objectFit: 'contain',
    width: '100%',
    height: 'auto',
  },
  title: {
    color: '#361101',
  },
}));

export default function EggsExampleSection({}) {
  const classes = useStyles();
  return (
    <div className={classes.exampleContainer} id='nfts'>
      <div className={classes.titleWrapper}>
        <Typography variant='h3' className={classes.title}>
          Sea Inu NFTs
        </Typography>
      </div>
      <div className={classes.eggsWrapper}>
        {inuList.map(egg => (
          <img key={egg} className={classes.eggStyle} src={`/img/inus/${egg}`} alt='inu' />
        ))}
      </div>
    </div>
  );
}

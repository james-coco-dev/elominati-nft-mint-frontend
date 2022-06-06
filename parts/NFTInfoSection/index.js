import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const list = [
  { value: 400, text: 'base eggs' },
  { value: 2000, text: 'pattern eggs' },
  { value: 100, text: 'rare eggs' },
  { value: 5, text: 'ultimate eggs' },
];

const eggs = [
  'Block_Paint_0000',
  'Glyph Egg',
  'Blurred_Christmas_0000',
  'Swamp-Water-Egg',
  'Protrusion Egg',
  'Summer_0017',
  'Egg [Base] Spots_0032',
  'Rainbow_Rares_[Patterned]_0047',
  'Blue_Metal_0002',
];

const useStyles = makeStyles(theme => ({
  infoContainer: {
    position: 'relative',
    width: '100vw',
    padding: theme.spacing(6, 9),
    backgroundColor: '#fff',
    color: '#000',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(6, 2),
    },
  },
  infoLine: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 12,
    // flexWrap: 'wrap',
    // justifyContent: 'space-between',
    maxWidth: 1000,
    margin: '24px auto',
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
    },
  },
  numbers: {},
  description: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif !important`,
    textTransform: 'uppercase',
    fontWeight: `400 !important`,
  },
  eggsLine: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  egg: {
    width: 130,
    height: 170,
    objectFit: 'contain',
    [theme.breakpoints.down('md')]: {
      width: 79,
      height: 103,
      overflow: 'hidden',
    },
  },
}));

export default function NFTInfoSection({}) {
  const classes = useStyles();
  return (
    <div className={classes.infoContainer} id='collection'>
      <div className={classes.infoLine}>
        {list.map((item, index) => (
          <div key={index}>
            <Typography variant='h3' className={classes.numbers} gutterBottom>
              {item.value}
            </Typography>

            <Typography className={classes.description}>{item.text}</Typography>
          </div>
        ))}
      </div>
      <div className={classes.eggsLine}>
        {eggs.map(egg => (
          <img
            key={egg}
            src={`/img/eggs/${egg}.jpg`}
            className={classes.egg}
            width={132}
            height={170}
            alt={egg}
          />
        ))}
      </div>
    </div>
  );
}

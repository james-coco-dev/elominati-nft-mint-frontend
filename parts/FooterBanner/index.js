import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100vw',
    height: `calc(60vh - 68px)`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    [theme.breakpoints.down('md')]: {
      height: `calc(60vh - 60px)`,
    },
  },
  landingImage: {
    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 151.74%)`,
  },
}));

export default function FooterBanner({}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Image
        className={classes.landingImage}
        layout='fill'
        objectFit='cover'
        src='/img/seal-team.jpg'
        alt='landing-banner'
      />
    </div>
  );
}

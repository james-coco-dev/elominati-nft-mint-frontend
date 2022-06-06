import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  videoStyle: {
    width: '100%',
    objectFit: 'contain',
  },
}));

export default function VideoSection({}) {
  const classes = useStyles();
  return (
    <video
      id='video'
      width='100%'
      height='100%'
      className={classes.videoStyle}
      autoPlay
      loop
      muted
      playsInline>
      <source src={'/video/intro-video.mp4'} type='video/mp4' />
      Your browser does not support the video tag.
    </video>
  );
}

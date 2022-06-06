import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { TokenContractAddress } from 'config/settings';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const teamMembers = [
  {
    name: 'Sergey',
    url: 'https://t.me/sergeyseainu',
    avatar: '/img/avatar1.jpg',
    role: 'CEO, Co-Founder',
  },
  {
    name: 'David',
    url: 'https://t.me/cryptophorcys/',
    avatar: '/img/avatar2.jpg',
    role: 'Full-stack Engineer',
  },
  {
    name: 'MD Osman',
    url: 'https://t.me/Professional_Maker',
    avatar: '/img/avatar3.jpg',
    role: 'Designer',
  },
  {
    name: 'Flush',
    url: 'https://t.me/ty_flush',
    avatar: '/img/avatar4.jpg',
    role: 'Marketing',
  },
];

const useStyles = makeStyles(theme => ({
  wrapper: {
    position: 'relative',
  },
  container: {
    position: 'relative',
    width: '100vw',
    padding: theme.spacing(6, 9),
    backgroundColor: theme.palette.background.main,
    backgroundSize: 'cover',
    textAlign: 'center',
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(6, 1),
    },
  },
  bg: {
    position: 'absolute',
    top: 0,
    width: '100vw',
    height: '100%',
    backgroundImage: 'url(/img/seainu-group.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    filter: 'blur(4px)',
  },
  title: {
    color: theme.palette.text.green,
  },
  row: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  media: {
    height: 240,
  },
  card: {
    minWidth: 300,
    maxWidth: 645,
    margin: theme.spacing(2, 0),
    borderRadius: '20px !important',
    opacity: 0.8,
  },
}));

export default function TeamSection({}) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper} id='team'>
      <div className={classes.container}>
        <Typography gutterBottom variant='h3' component='h3' className={classes.title}>
          Team
        </Typography>
        <div className={classes.row}>
          {teamMembers.map((member, index) => (
            <a href={member.url} target='_blank'>
              <Card className={classes.card} key={index}>
                <CardActionArea>
                  <CardMedia className={classes.media} image={member.avatar} title={member.name} />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {member.name}
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>
                      {member.role}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                {/* <CardActions>
                <Button size='small' color='primary'>
                  LinkedIn
                </Button>
                <Button size='small' color='primary'>
                  Learn More
                </Button>
              </CardActions> */}
              </Card>
            </a>
          ))}
        </div>
      </div>
      <div className={classes.bg} />
    </div>
  );
}

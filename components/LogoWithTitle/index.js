import { useContext } from 'react';
import { AppContext } from 'contexts';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import PAGES from 'constants/links/pages';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    padding: 0,
    margin: 'auto',
    maxWidth: 200,
    cursor: 'pointer',
  },
  logo: {
    marginRight: theme.spacing(1),
    width: theme.spacing(6.5),
    height: theme.spacing(6),
  },
  logoImage: {
    height: 88,
    objectFit: 'contain',
    [theme.breakpoints.down('md')]: {
      height: 68,
    },
  },
}));

const logoUrl = {
  dark: '/logo/seainu-logo00.png',
  light: '/logo/seainu-logo00.png',
};

const LogoWithTitle = ({ className }) => {
  const router = useRouter();
  const classes = useStyles();
  const { themeType } = useContext(AppContext);

  const logoHandler = () => {
    const titleElement = document.getElementById('home');
    if (titleElement) titleElement.scrollIntoView({ behavior: 'smooth' });
    // router.push('#home');
  };

  return (
    <div className={clsx(classes.root, className)} onClick={logoHandler}>
      <img className={classes.logoImage} src={logoUrl[themeType]} alt='logo' />
    </div>
  );
};

export default LogoWithTitle;

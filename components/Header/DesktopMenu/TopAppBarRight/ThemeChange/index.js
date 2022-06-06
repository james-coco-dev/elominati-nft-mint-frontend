import { useContext } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import { AppContext } from 'contexts';
import SunnyIcon from 'components/Icons/SunnyIcon';
import MoonIcon from 'components/Icons/MoonIcon';

const useStyles = makeStyles(theme => ({
  hoverEffect: {
    '&:hover': {
      transform: 'scale(1.15)',
    },
    '&:active': {
      transform: 'scale(1)',
    },
  },
  themeSwitchIcon: {
    width: '30px',
    height: '22px',
    margin: theme.spacing(0, 0.5),
    color: theme.palette.text.primary,
    cursor: 'pointer',
  },
}));

const ThemeChange = () => {
  const { themeType, themeChange } = useContext(AppContext);
  
  const classes = useStyles();

  return (
    <>
      {themeType === 'dark' ? (
        <MoonIcon
          className={clsx(classes.themeSwitchIcon, classes.hoverEffect)}
          onClick={() => themeChange('light')}
        />
      ) : ( themeType === 'light' ?
        <SunnyIcon
          className={clsx(classes.themeSwitchIcon, classes.hoverEffect)}
          onClick={() => themeChange('dark')}
        />
        : <div />
      )}
    </>
  );
};

export default ThemeChange;

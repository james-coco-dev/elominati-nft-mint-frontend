import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
  },
}));

const GovernIcon = ({ viewBox, width, height, color, ...rest }) => {
  const classes = useStyles();
  return (
    <SvgIcon width='24px' height='44px' viewBox='0 0 24 24' className={classes.root} {...rest}>
      <path d='M4 10h3v7H4zM10.5 10h3v7h-3zM2 19h20v3H2zM17 10h3v7h-3zM12 1L2 6v2h20V6z'></path>
    </SvgIcon>
  );
};

export default GovernIcon;

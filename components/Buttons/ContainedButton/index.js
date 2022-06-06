import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: props => {
    return {
      margin: theme.spacing(3 / 8),
      boxShadow: 'none',
      textTransform: 'none',
      color:
        props.variant === 'outlined'
          ? theme.palette.text.primary
          : theme.palette.primary.contrastText,
      backgroundColor: 'transparent',
      backgroundColor: props.variant === 'outlined' ? 'transparent' : theme.custom.palette.button,
      borderColor: theme.custom.palette.button,

      color: 'white !important',
      transition: '0.5s',
      background: `linear-gradient(-45deg, var(--c1, '#33bfb4'), var(--c2, rgba(80,93,212,1) ) 51%, var(--c1, rgb(36,187,208))) var(--x, 0)/ 200%`,
      '--c2': '#33bfb4',
      '--c1': 'rgb(80,93,212) !important',

      '&:hover': {
        boxShadow: 'none',
        // backgroundColor: props.variant === 'outlined' ? 'transparent' : theme.custom.palette.button,
        filter: 'contrast(120%)',
        // borderColor: theme.custom.palette.darkRed,
        '--x': '100%',
      },

      '&:disabled': {
        color: theme.palette.text.primary,
        backgroundColor: theme.custom.palette.blackGrey,
        opacity: 0.5,
      },
    };
  },
  loading: {
    marginRight: theme.spacing(1),
    color: '#fff',
  },
}));

const ContainedButton = ({
  className,
  type,
  color,
  variant,
  loading,
  disabled,
  children,
  ...rest
}) => {
  const classes = useStyles({ variant });

  return (
    <Button
      className={clsx(className, classes.root)}
      color={color}
      variant={variant || 'contained'}
      type={type}
      disabled={loading || disabled}
      {...rest}>
      {loading && <CircularProgress className={classes.loading} size={16} />}
      {children}
    </Button>
  );
};

export default ContainedButton;

import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from 'components/Icons/CloseIcon';
import LAYER from 'constants/z-index';

const useStyles = makeStyles(theme => ({
  overlay: {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: theme.palette.background.overlay,
    zIndex: LAYER.DIALOG_OVERLAY,
  },
  rect: {
    position: 'fixed',
    transform: 'translate(-50%, -50%)',
    left: '50%',
    top: '50%',
    width: `calc(100% - ${theme.spacing(4)}px)`,
    padding: `${theme.spacing(3.5)}px ${theme.spacing(3)}px`,
    background: theme.palette.primary.darkLight,
    boxShadow: theme.shadows[10],
    borderRadius: theme.spacing(3 / 8),
    [theme.breakpoints.up('sm')]: {
      width: 660,
    },
    zIndex: LAYER.DIALOG_MAIN,
  },
  smallRect: {
    [theme.breakpoints.up('sm')]: {
      width: 400,
    },
  },
  closeIcon: {
    cursor: 'pointer',
    position: 'absolute',
    width: theme.spacing(2),
    height: theme.spacing(2),
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export const dialogStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  center: {
    alignItems: 'center',
    textAlign: 'center',
  },
}));

const DialogWrapper = ({ open, onClose, smallWidth, children }) => {
  const classes = useStyles();

  if (!open) {
    return null;
  }

  return (
    <>
      <div className={clsx(classes.overlay, 'fade-in')} />
      <div className={clsx(classes.rect, smallWidth && classes.smallRect)}>
        {children}
        <CloseIcon className={classes.closeIcon} onClick={onClose} />
      </div>
    </>
  );
};

export default DialogWrapper;

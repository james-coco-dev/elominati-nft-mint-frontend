import clsx from 'clsx';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import HelpIcon from 'components/Icons/HelpIcon';
import { useTour } from 'utils/tour';

const useStyles = makeStyles(theme => ({
  root: {
    '&:hover': {
      cursor: 'pointer',
      opacity: 1,
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginRight: theme.spacing(1),
  },
  label: {
    [theme.breakpoints.down(1447)]: {
      display: 'none',
    },
    [theme.breakpoints.down('md')]: {
      display: 'inline',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    fontWeight: 100,
    textTransform: 'uppercase',
    color: theme.custom.palette.hover,
    margin: theme.spacing(0, 0.5),
  },
  disable: {
    opacity: 0.5,
  },
}));

const TipsTab = ({}) => {
  const classes = useStyles();
  const { isTourOpen, openTour } = useTour();

  const openHandler = () => {
    openTour();
  };

  return (
    <div onClick={openHandler} className={clsx(classes.root, { [classes.disable]: !isTourOpen })}>
      <HelpIcon />
    </div>
  );
};

export default TipsTab;

import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
  root: {
    width: 24,
    height: 24,
  },
}));

const ArrowLeftIcon = ({ className, viewBox, color, ...rest }) => {
  const classes = useStyles();
  return (
    <SvgIcon viewBox={viewBox || '0 0 24 24'} {...rest} className={clsx(classes.root, className)}>
      <path d='M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z'></path>
    </SvgIcon>
  );
};

export default ArrowLeftIcon;


import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
  root: {
    width: 24,
    height: 24,
    color: theme.palette.primary.light,
  }
}));

const ArrowIcon = ({ className, slideCount, props, viewBox, color, ...rest }) => {
  const classes = useStyles();
  return (
    <SvgIcon viewBox={viewBox || '0 0 24 24'} {...rest} className={clsx(classes.root, className)}>
      <path fill='currentColor' d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
    </SvgIcon>
  )
};

export default ArrowIcon;
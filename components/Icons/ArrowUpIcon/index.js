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

const ArrowUpIcon = ({ className, viewBox, color, ...rest }) => {
  const classes = useStyles();

  return (
    <SvgIcon viewBox={viewBox || '0 0 24 24'} {...rest} className={clsx(classes.root, className)}>
      <path d='M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z'></path>
    </SvgIcon>
  );
};

export default ArrowUpIcon;

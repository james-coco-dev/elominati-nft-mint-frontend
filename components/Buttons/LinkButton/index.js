
import React, { memo } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIos from '@material-ui/icons/ArrowBackIos'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 12,
    textDecoration: 'unset',
    color: theme.palette.primary.contrastText,
    '&:hover': {
      color: theme.custom.palette.hover
    }
  },
  icon: {
    width: 12,
    height: 12
  }
}));

const LinkButton = ({ className, label, url, isLeft = false, ...rest }) => {
  const classes = useStyles()
  return (
    <Link href={url} prefetch={false} >
      <a className={clsx(className, classes.root)} {...rest}>
        {isLeft && <ArrowBackIos className={classes.icon} />}
        {label}
        {!isLeft && <ArrowForwardIos className={classes.icon} />}
      </a>
    </Link >
  )
};

export default memo(LinkButton);

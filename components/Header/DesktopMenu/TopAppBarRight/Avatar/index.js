
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import ArroWIcon from 'components/Icons/ArrowIcon';

const useStyles = makeStyles(theme => ({
  bigAvatar: {
    height: '100%',
    width: theme.spacing(3.5),
    height: theme.spacing(3.5),
    margin: theme.spacing(0, 0.5, 0, 1),
  },
  avatarArea: {
    '&:hover': {
      cursor: 'pointer'
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: theme.spacing(0),
  },
  border: {
    backgroundColor: theme.custom.palette.darkRed,
  },
  color: {
    color: theme.palette.text.primary,

  },
  hoverEffect: {
    '&:hover': {
      transform: 'scale(1.25)',
      cursor: 'pointer'
    },
    '&:active': {
      transform: 'scale(1)'
    }
  },
  nameColor: {
    [theme.breakpoints.down(1447)]: {
      display: 'none'
    },
    [theme.breakpoints.down('md')]: {
      display: 'inline'
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
    color: theme.palette.text.primary,
    maxWidth : 100,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    // width: 'max-content'
  }
}));

const AvatarItem = ({}) => {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div onClick={handleClick} className={classes.avatarArea}>
        <ArroWIcon className={clsx(classes.color, classes.hoverEffect)} />
      </div>
    </>
  );
};

export default AvatarItem;

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

import { MOBILE_MENUS } from 'constants/links/top-menu-items';
import MenuButton from 'components/Buttons/MenuButton';
import MenuPanel from './MenuPanel';

const useStyles = makeStyles(theme => ({
  popper: {
    width: '100vw',
    zIndex: theme.zIndex.drawer + 2,
    display: 'block',
    left: 5,
  },
  paper: {
    position: 'relative',
    minHeight: '100vh',
    padding: theme.spacing(0, 5),
    backgroundColor: `rgba(0, 0, 0, 0.85)`,
    // backdropFilter: `blur(4px)`,
    transformBox: 'view-box',
    overflow: 'auto',
  },
  buttonColor: {
    color: theme.palette.text.primary,
    marginLeft: 0.01,
  },
}));

const MoblieMenu = ({ intl }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClick = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setOpen(!open);
  };
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);
  const handleItemClick = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <>
      <MenuButton
        type='button'
        className={classes.buttonColor}
        onClick={handleClick}
        isOpen={open}
      />
      <div>
        <Popper
          p={2000}
          open={open}
          anchorEl={anchorEl}
          transition
          className={classes.popper}
          elevation={8}
          placement={'top-start'}
          disablePortal={false}>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper className={classes.paper}>
                <MenuPanel onItemClick={handleItemClick} menuItems={MOBILE_MENUS} />
              </Paper>
            </Fade>
          )}
        </Popper>
      </div>
    </>
  );
};

export default MoblieMenu;

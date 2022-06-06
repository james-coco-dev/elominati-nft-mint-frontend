import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const AntSwitch = withStyles(theme => ({
  root: {
    width: theme.spacing(4.2),
    height: theme.spacing(2.5),
    margin: theme.spacing(1, 1, 1, 0),
    padding: 0
  },
  switchBase: {
    padding: 3.5,
    width: 'fit-content',
    color: theme.palette.background.main,
    '&$checked': {
      transform: 'translateX(14px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: theme.spacing(1.5),
    height: theme.spacing(1.5),
    boxShadow: 'none',
  },
  track: {
    borderRadius: 16 / 1.5,
    opacity: 1,
    backgroundColor: theme.custom.palette.darkRed,
  },
  checked: {},
}))(Switch);

const useStyles = makeStyles(theme => ({
  SwitchContainer: {
    cursor: 'pointer',
    width: 'fit-content',
    display: 'flex',
    flexWrap: 'unset',
    [theme.breakpoints.down(340)]: {
      '& .MuiTypography-body1': {
        fontSize: 13
      }
    }
  },
  disableButton: {
    '& .MuiSwitch-colorSecondary.Mui-disabled + .MuiSwitch-track': {
      backgroundColor: theme.custom.palette.darkRed,
      opacity: 0.2
    }
  }
}));

const CustomizedSwitches = ({ status, setStatus, value, variant, disabled }) => {
  const classes = useStyles();
  const handleChange = name => event => {
    setStatus({ ...status, [name]: event.target.checked });
  };
  return (

    <>
      <Typography component="div" >
        <Grid component="label" className={classes.SwitchContainer} container alignItems="center" spacing={0}>
          <Grid item>
            {disabled ?
              <AntSwitch
                checked={status.switchStatus || false}
                onChange={handleChange('switchStatus')}
                value="switchStatus"
                disabled
                className={classes.disableButton}
              />
              :
              <AntSwitch
                checked={status.switchStatus || false}
                onChange={handleChange('switchStatus')}
                value="switchStatus"
              />
            }
          </Grid>
          <Grid item>
            <Typography variant={variant} color={status.switchStatus ? 'inherit' : 'textSecondary'}>
              {value}
            </Typography></Grid>
        </Grid>
      </Typography>
    </>
  );
}

export default CustomizedSwitches;
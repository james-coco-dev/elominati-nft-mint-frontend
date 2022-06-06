

import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
  root: {
    width: 20,
    height: 20,
  }
}));

const FacebookIcon = ({ className, viewBox, color, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <SvgIcon viewBox={viewBox || '0 0 112.196 112.196'} {...rest} className={clsx(classes.root, className)}>
      <g>
        <circle cx='56.098' cy='56.098' r='70' />
        <path style={{ fill: `${theme.palette.background.default}` }} d='M70.201,58.294h-10.01v36.672H45.025V58.294h-7.213V45.406h7.213v-8.34
        c0-5.964,2.833-15.303,15.301-15.303L71.56,21.81v12.51h-8.151c-1.337,0-3.217,0.668-3.217,3.513v7.585h11.334L70.201,58.294z'/>
      </g>
    </SvgIcon>
  )
};

export default FacebookIcon;
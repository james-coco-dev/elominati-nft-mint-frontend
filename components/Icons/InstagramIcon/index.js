
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
    root: {
        width: 20,
        height: 20,
    }
}));

const InstagramIcon = ({ className, viewBox, color, ...rest }) => {
    const classes = useStyles();
    return (
        <SvgIcon viewBox={viewBox || '0 0 512 512'} {...rest} className={clsx(classes.root, className)}>
          <g>
      
        <path  d="m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h362c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm-180 390c-74.441406 0-135-60.558594-135-135s60.558594-135 135-135 135 60.558594 135 135-60.558594 135-135 135zm150-240c-24.8125 0-45-20.1875-45-45s20.1875-45 45-45 45 20.1875 45 45-20.1875 45-45 45zm0 0"/>
      
      </g>
        </SvgIcon>
    )
};

export default InstagramIcon;
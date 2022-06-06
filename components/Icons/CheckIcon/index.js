
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
    root: {
        width: 20,
        height: 20
    }
}));

const CheckIcon = ({ className, viewBox, color, ...rest }) => {
    const classes = useStyles();
    return (
        <SvgIcon viewBox={viewBox || "0 0 24 24"} {...rest} className={clsx(classes.root, className)}>
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
        </SvgIcon>
    )
};

export default CheckIcon;
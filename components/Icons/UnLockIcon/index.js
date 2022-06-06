
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
    root: {
        width: theme.spacing(2),
        height: theme.spacing(2)
    }
}));

const UnLockIcon = ({ className, viewBox, color, ...rest }) => {
    const classes = useStyles();

    return (
        <SvgIcon viewBox={viewBox || "0 0 28.2 32.9"} {...rest} className={clsx(classes.root, className)}>
            <path d="M21.7,13.9" />
            <path d="M21.4,14.9" />
            <path d="M24.8,14.9h-0.3h-2.7h-0.4H6.5c0,0,0,0,0,0v-4c0-2,0.8-3.7,2.2-5c1.4-1.3,3.3-2.1,5.4-2.1c2.1,0,4,0.8,5.4,2.1
                    c0.8,0.8,1.4,1.7,1.8,2.8c0.1,0.3,0.4,0.5,0.7,0.5h1.7c0.4,0,0.5-0.2,0.5-0.4c-0.4-1.9-1.4-3.5-2.8-4.8C19.5,2.1,16.9,1,14.1,1
                    c-2.8,0-5.4,1.1-7.3,2.9c-1.9,1.8-3.1,4.3-3.1,7v4c0,0,0,0,0,0H0.8c0,0,0,0,0,0v13.7c0,2.1,1.8,3.9,3.9,3.9h18.7
                    c2.1,0,3.9-1.8,3.9-3.9V14.9c0,0,0,0,0,0H24.8z M15.1,24v2.6c0,0,0,0,0,0h-2c0,0,0,0,0,0V24c0,0,0,0,0,0c-0.7-0.4-1.1-1.3-0.9-2.2
                    c0.2-0.7,0.8-1.3,1.5-1.4c1.3-0.3,2.4,0.7,2.4,1.9C16,23,15.6,23.6,15.1,24C15.1,24,15.1,24,15.1,24z"/>
        </SvgIcon>
    )
};

export default UnLockIcon;
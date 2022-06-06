
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
    root: {
        width: 24,
        height: 22,
    }
}));

const YouTubeIcon = ({ className, viewBox, color, ...rest }) => {
    const classes = useStyles();
    return (
        <SvgIcon viewBox={viewBox || '0 0 24 24'} {...rest} className={clsx(classes.root, className)}>
            <g>
                <path d="M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 10v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-6 4l-6-3.27v6.53L16 16z"></path>
            </g>
        </SvgIcon>
    )
};

export default YouTubeIcon;
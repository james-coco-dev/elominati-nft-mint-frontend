

import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
    root: {
        width: 24,
        height: 24,
        color: 'red'
    }
}));

const TopicsChannelsIcon = ({ className, viewBox, color, ...rest }) => {
    const classes = useStyles();

    return (
        <SvgIcon viewBox={viewBox || "0 0 20 16"} {...rest} className={clsx(classes.root, className)}>
            <g id="Icons">
                <g id="Icons" transform="translate(-613.000000, -527.000000)">
                    <g id="Channel" transform="translate(613.000000, 527.000000)">
                        <path d="M13,0 C13.5522461,0 14,0.4477539 14,1 L14,13 C14,13.5522461 13.5522461,14 13,14 L1,14 C0.4477539,14 0,13.5522461 0,13 L0,1 C0,0.4477539 0.4477539,0 1,0 L13,0 Z M12,2 L2,2 L2,12 L12,12 L12,2 Z M9,8 C9.5522461,8 10,8.4477539 10,9 C10,9.5522461 9.5522461,10 9,10 L5,10 C4.4477539,10 4,9.5522461 4,9 C4,8.4477539 4.4477539,8 5,8 L9,8 Z M9,4 C9.5522461,4 10,4.4477539 10,5 C10,5.5522461 9.5522461,6 9,6 L5,6 C4.4477539,6 4,5.5522461 4,5 C4,4.4477539 4.4477539,4 5,4 L9,4 Z" id="Combined-Shape"></path>
                    </g>
                </g>
            </g>
        </SvgIcon>
    )
};

export default TopicsChannelsIcon;



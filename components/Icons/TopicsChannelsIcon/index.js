
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
    root: {
        width: 24,
        height: 24,
        color: theme.palette.text.primary
    }
}));

const TopicsChannelsIcon = ({ className, viewBox, color, ...rest }) => {
    const classes = useStyles();
    return (
        <SvgIcon viewBox={viewBox || "0 0 19 18"} {...rest} className={clsx(classes.root, className)}>
            <g id="Icons" >
                <g id="Icons" transform="translate(-613.000000, -319.000000)">
                    <g id="Group-23" transform="translate(613.000000, 319.000000)">
                        <g id="playlist-(1)">
                            <path d="M16.7142857,18 L1.28571429,18 C0.575683586,18 0,17.4243164 0,16.7142857 L0,1.28571429 C0,0.575683586 0.575683586,0 1.28571429,0 L16.7142857,0 C17.4243164,0 18,0.575683586 18,1.28571429 L18,16.7142857 C18,17.4243164 17.4243164,18 16.7142857,18 Z M2.57142857,15.4285714 L15.4285714,15.4285714 L15.4285714,2.57142857 L2.57142857,2.57142857 L2.57142857,15.4285714 Z" id="Shape"></path>
                            <path d="M11.5714286,7.71428571 L6.42857143,7.71428571 C5.71854073,7.71428571 5.14285714,7.13860213 5.14285714,6.42857143 C5.14285714,5.71854073 5.71854073,5.14285714 6.42857143,5.14285714 L11.5714286,5.14285714 C12.2814593,5.14285714 12.8571429,5.71854073 12.8571429,6.42857143 C12.8571429,7.13860213 12.2814593,7.71428571 11.5714286,7.71428571 Z" id="Path"></path>
                            <path d="M11.5714286,12.8571429 L6.42857143,12.8571429 C5.71854073,12.8571429 5.14285714,12.2814593 5.14285714,11.5714286 C5.14285714,10.8613979 5.71854073,10.2857143 6.42857143,10.2857143 L11.5714286,10.2857143 C12.2814593,10.2857143 12.8571429,10.8613979 12.8571429,11.5714286 C12.8571429,12.2814593 12.2814593,12.8571429 11.5714286,12.8571429 Z" id="Path"></path>
                        </g>
                    </g>
                </g>
            </g>
        </SvgIcon>
    )
};

export default TopicsChannelsIcon;



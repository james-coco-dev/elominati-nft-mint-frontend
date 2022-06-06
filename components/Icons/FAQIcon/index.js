
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
    root: {
        width: 28,
        height: 20,
        color: theme.palette.text.primary
    }
}));

const FAQIcon = ({ className, viewBox, color, ...rest }) => {

    const classes = useStyles();
    return (
        <SvgIcon viewBox={viewBox || "0 0 512 512"} {...rest} className={clsx(classes.root, className)}>
            <g>
                <g>
                    <g>
                        <circle cx="256" cy="378.5" r="25" />
                        <path d="M256,0C114.516,0,0,114.497,0,256c0,141.484,114.497,256,256,256c141.484,0,256-114.497,256-256
				C512,114.516,397.503,0,256,0z M256,472c-119.377,0-216-96.607-216-216c0-119.377,96.607-216,216-216
				c119.377,0,216,96.607,216,216C472,375.377,375.393,472,256,472z"/>
                        <path d="M256,128.5c-44.112,0-80,35.888-80,80c0,11.046,8.954,20,20,20s20-8.954,20-20c0-22.056,17.944-40,40-40
				c22.056,0,40,17.944,40,40c0,22.056-17.944,40-40,40c-11.046,0-20,8.954-20,20v50c0,11.046,8.954,20,20,20
				c11.046,0,20-8.954,20-20v-32.531c34.466-8.903,60-40.26,60-77.469C336,164.388,300.112,128.5,256,128.5z"/>
                    </g>
                </g>
            </g>
        </SvgIcon>
    )
};

export default FAQIcon;



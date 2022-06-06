
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
  root: {
    width: 16,
    height: 16,
    color: '#BA1A48',
    marginRight: theme.spacing(2),
  }
}));

const CancelIcon = ({ className, viewBox, color, ...rest }) => {
  const classes = useStyles();
  return (
    <SvgIcon viewBox={viewBox || "0 0 16 16"} {...rest} className={clsx(classes.root, className)}>
      <g id="Icon">
        <g transform="translate(-641.000000, -185.000000)" fillRule="nonzero">
          <g transform="translate(625.000000, 163.000000)">
            <path d="M16.4686292,22.4686292 C17.093468,21.8437903 18.106532,21.8437903 18.7313708,22.4686292 L18.7313708,22.4686292 L24,27.7372583 L29.2686292,22.4686292 C29.893468,21.8437903 30.906532,21.8437903 31.5313708,22.4686292 C32.1562097,23.093468 32.1562097,24.106532 31.5313708,24.7313708 L31.5313708,24.7313708 L26.263,30 L31.5313708,35.2686292 C32.1562097,35.893468 32.1562097,36.906532 31.5313708,37.5313708 C30.906532,38.1562097 29.893468,38.1562097 29.2686292,37.5313708 L24,32.2627417 L18.7313708,37.5313708 C18.106532,38.1562097 17.093468,38.1562097 16.4686292,37.5313708 C15.8437903,36.906532 15.8437903,35.893468 16.4686292,35.2686292 L21.737,30 L16.4686292,24.7313708 C15.8805455,24.1432872 15.8459524,23.2113087 16.3648497,22.5827668 Z"></path>
          </g>
        </g>
      </g>
    </SvgIcon>
  )
};

export default CancelIcon;
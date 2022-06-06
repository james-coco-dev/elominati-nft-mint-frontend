
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
  root: {
    width: 16,
    height: 13,
    color: '#49D850',
    marginRight: theme.spacing(2),
  }
}));

const ConfirmIcon = ({ className, viewBox, color, ...rest }) => {
  const classes = useStyles();
  return (
    <SvgIcon viewBox={viewBox || "0 0 16 13"} {...rest} className={clsx(classes.root, className)}>
      <g id="Icon">
        <g transform="translate(-641.000000, -103.000000)"  >
          <g transform="translate(625.000000, 80.000000)">
            <path d="M17.9309356,28.034093 C17.5750514,27.5660715 16.9024499,27.4716408 16.4286382,27.823176 C15.9548265,28.1747112 15.8592275,28.8390931 16.2151117,29.3071146 L20.9824833,35.5766587 C21.3995348,36.1251208 22.2261694,36.1437221 22.6680731,35.6145886 L31.7546869,24.7343192 C32.1317785,24.2827915 32.0669076,23.6147986 31.6097937,23.2423152 C31.1526798,22.8698319 30.4764227,22.9339101 30.0993312,23.3854378 L21.879897,33.2273503 L17.9309356,28.034093 Z"></path>
          </g>
        </g>
      </g>
    </SvgIcon>
  )
};

export default ConfirmIcon;
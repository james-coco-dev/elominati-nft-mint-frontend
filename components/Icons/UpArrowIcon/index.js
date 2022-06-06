
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
  root: {
    width: 12,
    height: 13
  }
}));

const UpArrowIcon = ({ className, viewBox, color, ...rest }) => {
  const classes = useStyles();
  return (
    <SvgIcon viewBox={viewBox || "0 0 12 13"} {...rest} className={clsx(classes.root, className)}>
      <g fill="#16ACE2">
        <path d="M6.857 5.84c0 .136-.041.274-.116.376L3.312 11.36c-.123.185-.33.309-.57.309H.687c-.377 0-.686-.309-.686-.686 0-.137.041-.274.117-.377L3.29 5.839.117 1.074C.04.97 0 .834 0 .696 0 .32.309.011.686.011h2.057c.24 0 .446.123.569.308l3.429 5.143c.075.103.116.24.116.377z" transform="rotate(-90 6.5 6.5)" />
        <path d="M12.714 5.84c0 .136-.04.274-.116.376L9.169 11.36c-.123.185-.329.309-.569.309H6.543c-.377 0-.686-.309-.686-.686 0-.137.041-.274.117-.377l3.175-4.766-3.175-4.765C5.898.97 5.857.834 5.857.696c0-.377.309-.685.686-.685H8.6c.24 0 .446.123.57.308l3.428 5.143c.075.103.116.24.116.377z" transform="rotate(-90 6.5 6.5)" />
      </g>
    </SvgIcon>
  )
};

export default UpArrowIcon;
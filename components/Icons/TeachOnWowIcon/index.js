
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
  root: {
    width: 22,
    height: 22,
    marginRight : 10,
    color: theme.palette.text.primary
  }
}));

const TeachOnWowIcon = ({ className, viewBox, color, ...rest }) => {

  const classes = useStyles();
  return (
    <SvgIcon viewBox="0 0 16 16" fill="none" {...rest} className={clsx(classes.root, className)}>
      <g id="Icons">
        <path d="M13.3333 11.3335C13.687 11.3335 14.0261 11.193 14.2761 10.943C14.5262 10.6929 14.6667 10.3538 14.6667 10.0002V2.66683C14.6667 2.31321 14.5262 1.97407 14.2761 1.72402C14.0261 1.47397 13.687 1.3335 13.3333 1.3335H6.30667C6.54 1.74016 6.66667 2.20016 6.66667 2.66683H13.3333V10.0002H7.33333V11.3335H13.3333ZM10 4.66683V6.00016H6V14.6668H4.66667V10.6668H3.33333V14.6668H2V9.3335H1V6.00016C1 5.64654 1.14048 5.3074 1.39052 5.05735C1.64057 4.80731 1.97971 4.66683 2.33333 4.66683H10ZM5.33333 2.66683C5.33333 3.02045 5.19286 3.35959 4.94281 3.60964C4.69276 3.85969 4.35362 4.00016 4 4.00016C3.64638 4.00016 3.30724 3.85969 3.05719 3.60964C2.80714 3.35959 2.66667 3.02045 2.66667 2.66683C2.66667 2.31321 2.80714 1.97407 3.05719 1.72402C3.30724 1.47397 3.64638 1.3335 4 1.3335C4.35362 1.3335 4.69276 1.47397 4.94281 1.72402C5.19286 1.97407 5.33333 2.31321 5.33333 2.66683Z" fill="white" />
      </g>
    </SvgIcon>
  )
};

export default TeachOnWowIcon;



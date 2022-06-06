
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
  root: {
    width: 9,
    height: 16,
  }
}));

const ArrowDownIcon = ({ className, viewBox, color, ...rest }) => {
  const classes = useStyles();
  return (
    <SvgIcon viewBox={viewBox || "0 0 9 16"} {...rest} className={clsx(classes.root, className)}>
      <g id="Page-1" stroke="none" fill="none">
        <g id="Icons" transform="translate(-1005.000000, -388.000000)">
          <g id="Group-14" transform="translate(1005.000000, 388.000000)">
            <path d="M8.44556886,11.5128443 L8.01820359,11.085509 C7.96125749,11.0284431 7.89565868,11 7.82149701,11 C7.74751497,11 7.68194611,11.0284431 7.625,11.085509 L4.2654491,14.4448802 L0.906047904,11.0855988 C0.849071856,11.0285329 0.783502994,11.0000898 0.709431138,11.0000898 C0.635329341,11.0000898 0.569760479,11.0285329 0.512814371,11.0855988 L0.085508982,11.5129641 C0.0284431138,11.5699102 8.8817842e-16,11.635479 8.8817842e-16,11.7095808 C8.8817842e-16,11.7836228 0.0285329341,11.8491916 0.085508982,11.9061377 L4.06883234,15.8895509 C4.12577844,15.9465269 4.19137725,15.975 4.2654491,15.975 C4.33952096,15.975 4.405,15.9465269 4.46191617,15.8895509 L8.44556886,11.9061377 C8.50251497,11.8491617 8.53080838,11.7835928 8.53080838,11.7095808 C8.53080838,11.635479 8.50251497,11.5699102 8.44556886,11.5128443 Z" id="Path" fill="#FFFFFF" fillRule="nonzero"></path>
            <path d="M4.5,15.5 L4.5,0" id="Path-7" stroke="#FFFFFF"></path>
          </g>
        </g>
      </g>
    </SvgIcon>
  )
};

export default ArrowDownIcon;








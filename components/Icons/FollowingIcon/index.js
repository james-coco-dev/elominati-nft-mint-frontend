
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
  root: {
    width: 14,
    height: 14
  }
}));

const FollowIcon = ({ className, viewBox, color, ...rest }) => {
  const classes = useStyles();

  return (
    <SvgIcon viewBox={viewBox || "0 0 16 14"} {...rest} className={clsx(classes.root, className)} >
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <g id="Follow_bttn" transform="translate(-45.000000, -223.000000)" fill="#F8F9F7" stroke="#FFFFFF" strokeWidth="1.27272727">
          <g id="Following" transform="translate(30.000000, 212.000000)">
            <g id="Button">
              <g id="heart-copy" transform="translate(16.000000, 12.000000)">
                <path d="M12.6254545,1.02454545 C11.9690301,0.367812752 11.0785424,-0.00116175894 10.15,-0.00116175894 C9.22145762,-0.00116175894 8.33096994,0.367812752 7.67454545,1.02454545 L7,1.69909091 L6.32545455,1.02454545 C4.95829875,-0.342610305 2.74170127,-0.342610289 1.37454549,1.02454549 C0.00738971148,2.39170127 0.00738969497,4.60829875 1.37454545,5.97545455 L2.04909091,6.65 L7,11.6009091 L11.9509091,6.65 L12.6254545,5.97545455 C13.2821872,5.31903006 13.6511618,4.42854238 13.6511618,3.5 C13.6511618,2.57145762 13.2821872,1.68096994 12.6254545,1.02454545 Z" id="Path"></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </SvgIcon>
  )
};

export default FollowIcon;




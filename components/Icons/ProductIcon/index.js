
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
  root: {
    width: 13,
    height: 14,
    color:theme.palette.text.chip,
    marginBottom: 4
  }
}));

const ProductIcon = ({ className, viewBox, color, ...rest }) => {
  const classes = useStyles();
  return (
    <SvgIcon viewBox={viewBox || "0 0 15 10"} {...rest} className={clsx(classes.root, className)}>
      <g id="Icon" >
        <g id="3-Dashboard" transform="translate(-69.000000, -1460.000000)">
          <g id="Group-10-Copy-7" transform="translate(55.000000, 1446.000000)">
            <g id="Group-7">
              <g id="Group-14">
                <g id="Group-10" transform="translate(10.000000, 10.000000)">
                  <g id="product" transform="translate(4.000000, 4.000000)">
                    <path d="M13.5763934,6.7007541 L7.28481967,0.409180328 C7.0295082,0.157377049 6.67977049,0 6.29508197,0 L1.39891803,0 C0.626,0 0,0.626 0,1.39891803 L0,6.29508197 C0,6.68327869 0.157377049,7.03301639 0.412688525,7.28481967 L6.70777049,13.5799016 C6.95957377,13.8317049 7.30931148,13.989082 7.694,13.989082 C8.07868852,13.989082 8.43193443,13.8317049 8.6837377,13.5799016 L13.5799016,8.6837377 C13.8317049,8.42842623 13.989082,8.07872131 13.989082,7.694 C13.989082,7.30580328 13.8317049,6.95606557 13.5763934,6.7007541 Z M2.79891803,4.19891803 C2.02423678,4.19891803 1.39891803,3.57359928 1.39891803,2.79891803 C1.39891803,2.02423678 2.02423678,1.39891803 2.79891803,1.39891803 C3.57359928,1.39891803 4.19891803,2.02423678 4.19891803,2.79891803 C4.19891803,3.57359928 3.57355553,4.19891803 2.79891803,4.19891803 Z" id="Shape"></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </SvgIcon>
  )
};

export default ProductIcon;


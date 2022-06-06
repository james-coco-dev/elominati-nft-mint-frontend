
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
  root: {
    width: 24,
    height: 24
  }
}));

const PencilIcon = ({ className, viewBox, color, ...rest }) => {
  const classes = useStyles();
  return (
    <SvgIcon viewBox={viewBox || "0 0 24 24"} {...rest} className={clsx(classes.root, className)}>
      <g id="Icons">
        <g id="updates_22.05" transform="translate(-266.000000, -968.000000)">
          <g id="Group-14-Copy-9" transform="translate(110.000000, 798.000000)">
            <g id="Option-F">
              <g id="user" transform="translate(10.000000, 168.000000)">
                <g id="pencil_icon" transform="translate(146.000000, 2.000000)">
                  <rect id="Rectangle" opacity="0" x="0" y="0" width="24" height="24" rx="2"></rect>
                  <path d="M14.258432,6.64199296 L7.0035855,13.8968394 C6.92092349,13.9795014 6.86126454,14.0823045 6.83050566,14.1950871 L6.02441161,17.1507653 C5.88765062,17.6522222 6.34777779,18.1123494 6.84923474,17.9755884 L9.80491292,17.1694943 C9.91769549,17.1387355 10.0204986,17.0790765 10.1031606,16.9964145 L17.358007,9.74156804 C17.9116928,9.18788229 18.1279317,8.3808677 17.9252687,7.62451888 C17.7226056,6.86817006 17.1318299,6.27739438 16.3754811,6.07473133 C15.6191323,5.87206827 14.8121177,6.08830719 14.258432,6.64199296 Z M16.0277603,7.3724431 C16.3204814,7.45087747 16.5491225,7.67951864 16.6275569,7.9722397 L16.6513377,8.0985491 C16.679415,8.35219692 16.5916904,8.60790278 16.4080161,8.79157708 L9.27885769,15.9195355 L7.62905186,16.3696046 L8.07912104,14.7197988 L15.2084229,7.5919839 C15.4227096,7.37769721 15.7350392,7.29400873 16.0277603,7.3724431 Z" id="Path" ></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </SvgIcon>
  )
};

export default PencilIcon;
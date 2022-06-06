
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
  root: {
    width: 16,
    height: 16
  }
}));

const CircleVideoIcon = ({ className, viewBox, color, ...rest }) => {
  const classes = useStyles();
  return (
    <SvgIcon width="16px" height="16px" viewBox={viewBox || "0 0 16 16"} {...rest} className={clsx(classes.root, className)}>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none">
        <g id="academy_player_page_2" transform="translate(-1146.000000, -522.000000)">
          <g id="Group-19" transform="translate(1138.000000, 269.000000)">
            <g id="Group-7-Copy-4" transform="translate(8.000000, 252.000000)">
              <g id="play" transform="translate(0.000000, 1.000000)">
                <path d="M6.77184725,5.71925696 L10.3792777,7.52297216 C10.6427329,7.65469976 10.7495192,7.97505872 10.6177916,8.23851392 C10.5661843,8.34172853 10.4824923,8.42542053 10.3792777,8.47702784 L6.77184725,10.280743 C6.50839205,10.4124706 6.1880331,10.3056843 6.0563055,10.0422291 C6.01927738,9.96817289 6,9.88651259 6,9.80371521 L6,6.19628479 C6,5.90173293 6.23878147,5.66295146 6.53333333,5.66295146 C6.61613072,5.66295146 6.69779102,5.68222884 6.77184725,5.71925696 Z" id="Rectangle" fill="#D8D8D8"></path>
                <circle id="Oval" stroke="#DCDCDC" strokeWidth="0.666666667" cx="8" cy="8" r="7.66666667"></circle>
              </g>
            </g>
          </g>
        </g>
      </g>
    </SvgIcon>
  )
};

export default CircleVideoIcon;
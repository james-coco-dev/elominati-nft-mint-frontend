
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

const CircleCheckIcon = ({ className, viewBox, color, ...rest }) => {
  const classes = useStyles();
  return (
    <SvgIcon width="16px" height="16px" viewBox={viewBox || "0 0 16 16"} {...rest} className={clsx(classes.root, className)}>
      <g id="Page-1" fill="none">
        <g id="academy_player_page_2" transform="translate(-1146.000000, -270.000000)">
          <g id="Group-19" transform="translate(1138.000000, 269.000000)">
            <g id="Group-10" transform="translate(8.000000, 0.000000)">
              <g id="check" transform="translate(0.000000, 1.000000)">
                <path d="M8,0 C12.418278,0 16,3.581722 16,8 C16,12.418278 12.418278,16 8,16 C3.581722,16 0,12.418278 0,8 C0,3.581722 3.581722,0 8,0 Z M11.7656854,5.23431458 C11.453266,4.92189514 10.946734,4.92189514 10.6343146,5.23431458 L10.6343146,5.23431458 L6.8,9.068 L5.36568542,7.63431458 L5.29031955,7.56776369 C4.97648659,7.32374378 4.52270174,7.34592741 4.23431458,7.63431458 C3.92189514,7.94673401 3.92189514,8.45326599 4.23431458,8.76568542 L4.23431458,8.76568542 L6.23431458,10.7656854 L6.30968045,10.8322363 C6.62351341,11.0762562 7.07729826,11.0540726 7.36568542,10.7656854 L7.36568542,10.7656854 L11.7656854,6.36568542 L11.8322363,6.29031955 C12.0762562,5.97648659 12.0540726,5.52270174 11.7656854,5.23431458 Z" id="Oval-2" fill="#F1F1F1"></path>
                <g transform="translate(5.000000, 6.000000)"></g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </SvgIcon>
  )
};

export default CircleCheckIcon;
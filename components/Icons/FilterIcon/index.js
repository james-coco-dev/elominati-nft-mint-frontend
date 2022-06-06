
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
    root: {
        color: theme.palette.text.primary
    }
}));

const FilterIcon = ({ viewBox, width, height, color, ...rest }) => {
  const classes = useStyles();
  return (
    <svg width="21px" height="14px" viewBox="0 0 21 14" className={classes.root} >
      <g id="Page-1" stroke="none" fill="none" >
        <g id="Icons" transform="translate(-804.000000, -526.000000)" fill={"currentColor"}>
          <g id="filter-results-button" transform="translate(804.000000, 526.000000)">
            <path d="M8.14006515,13.9771987 L12.7915309,13.9771987 L12.7915309,11.6514658 L8.14006515,11.6514658 L8.14006515,13.9771987 Z M0,0.0228013029 L0,2.3485342 L20.9315961,2.3485342 L20.9315961,0.0228013029 L0,0.0228013029 Z M3.48859935,8.16286645 L17.4429967,8.16286645 L17.4429967,5.83713355 L3.48859935,5.83713355 L3.48859935,8.16286645 Z" id="Shape"></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default FilterIcon  

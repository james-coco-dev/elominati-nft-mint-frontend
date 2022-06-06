import SvgIcon from '@material-ui/core/SvgIcon';

const NetworkIcon = ({ viewBox, ...rest }) => (
  <SvgIcon
    viewBox={viewBox || '0 0 24 24'}
    {...rest}
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'>
    <polyline fill='none' points='22 12 18 12 15 21 9 3 6 12 2 12'></polyline>
  </SvgIcon>
);

export default NetworkIcon;

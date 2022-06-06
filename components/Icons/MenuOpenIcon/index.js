import SvgIcon from '@material-ui/core/SvgIcon';

const MenuOpenIcon = ({ viewBox, ...rest }) => (
  <SvgIcon viewBox={viewBox || '0 0 21 16'} {...rest}>
    <path d='M0 0h24v24H0z' fill='none' />
    <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
  </SvgIcon>
);

export default MenuOpenIcon;

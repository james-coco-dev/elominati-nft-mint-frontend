import SvgIcon from '@material-ui/core/SvgIcon';

const WaitingIcon = ({ viewBox, color='#38ffa6', ...rest }) => (
  <SvgIcon viewBox={viewBox || "0 0 33 32"} {...rest}>
    <g fill="none" fillRule="evenodd">
      <circle cx="16" cy="16" r="15" stroke={color} strokeWidth="2">
      </circle>
      <path d="m1.685 17.908h9.63c.864 0 1.55-.698 1.458-1.502-.6-5.179-4.18-5.093-4.18-7.406s3.626-2.184 4.18-7.406c.087-.805-.594-1.502-1.458-1.502h-9.63c-.865 0-1.543.697-1.458 1.502.554 5.222 4.18 5.05 4.18 7.406 0 2.355-3.58 2.227-4.18 7.406-.093.804.594 1.502 1.458 1.502z" stroke={color} strokeLinecap="round" strokeLinejoin="round" transform="translate(10 7)">
      </path>
      <g fillRule="nonzero">
        <path d="m10.308 16.538h-7.597c-.68 0-.873-.771-.395-1.25 1.155-1.149 3.486-1.972 3.486-3.29v-4.368c0-.85-1.657-1.5-2.683-2.878-.17-.228-.152-.549.278-.549h6.226c.367 0 .446.319.279.546-1.01 1.382-2.704 2.026-2.704 2.88v4.369c0 1.307 2.43 2.013 3.507 3.292.434.516.282 1.248-.397 1.248z" fill={color} transform="translate(10 7)">
        </path>
        <path d="m0 0h22v22h-22z" transform="translate(5 5)">
        </path>
      </g>
    </g>
  </SvgIcon>
);

export default WaitingIcon;


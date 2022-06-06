import SvgIcon from '@material-ui/core/SvgIcon';

const SignInIcon = ({ viewBox, color='#38ffa6', ...rest }) => (
  <SvgIcon viewBox={viewBox || "0 0 33 32"} {...rest}>
    <g fill="none" fillRule="evenodd">
      <circle cx="16" cy="16" r="15" stroke={color} strokeWidth="2">
      </circle>
      <path d="m12.399 2.588-11.641 11.67-.706 1.707 1.708-.705 11.67-11.641zm2.329-2.328-.504.503 1.03 1.031.505-.504c.275-.276.275-.723 0-.999l-.032-.031c-.133-.132-.312-.206-.5-.206-.187 0-.367.074-.5.206z" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" transform="translate(8 8)">
      </path>
      <path d="m0 0h22v22h-22z" fillRule="nonzero" transform="translate(5 5)">
      </path>
    </g>
  </SvgIcon>
);

export default SignInIcon;


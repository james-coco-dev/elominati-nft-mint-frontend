import SvgIcon from '@material-ui/core/SvgIcon';

const PermissonIcon = ({ viewBox, ...rest }) => (
  <SvgIcon viewBox={viewBox || "0 0 33 32"} {...rest}>
    <g fill="none" fillRule="evenodd">
      <path
        d="m19.855 4.7c-3.823-.648-5.404-1.128-8.855-2.6-3.451 1.473-5.032 1.953-8.855 2.6-.693 10.368 8.195 13.949 8.855 14.2.66-.251 9.548-3.832 8.855-14.2z"
        stroke="#38ffa6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        transform="translate(5.501 6)">
      </path>
      <path d="m0 0h22v21h-22z" fillRule="nonzero" transform="translate(5.501 6)">
      </path>
      <circle cx="16.501" cy="16" r="15" stroke="#38ffa6" strokeWidth="2">
      </circle>
    </g>
  </SvgIcon>
);

export default PermissonIcon;


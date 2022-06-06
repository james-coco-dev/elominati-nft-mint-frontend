import SvgIcon from '@material-ui/core/SvgIcon';

const OpenSeaIcon = ({ viewBox, ...rest }) => (
  <SvgIcon viewBox={viewBox || '0 0 40 40'} {...rest}>
    <g fill='transparent'>
      <path d='M0.5 0.5H39.5V39.5H0.5V0.5Z' stroke='currentColor' />
    </g>
    <path
      d='M10.7111 20.4203L10.7888 20.2981L15.4777 12.9629C15.5462 12.8555 15.7073 12.8666 15.7592 12.9833C16.5425 14.7388 17.2184 16.9222 16.9018 18.2814C16.7666 18.8407 16.3962 19.5981 15.9795 20.2981C15.9259 20.4 15.8666 20.5 15.8036 20.5963C15.774 20.6407 15.724 20.6666 15.6703 20.6666H10.8481C10.7184 20.6666 10.6425 20.5259 10.7111 20.4203Z'
      fill='currentColor'
    />
    <path
      d='M31.6111 21.7833V22.9444C31.6111 23.0111 31.5704 23.0704 31.5111 23.0963C31.1482 23.2518 29.9056 23.8222 29.3889 24.5407C28.0704 26.3759 27.063 29 24.8111 29H15.4167C12.0871 29 9.38892 26.2926 9.38892 22.9518V22.8444C9.38892 22.7555 9.46112 22.6833 9.55002 22.6833H14.7871C14.8908 22.6833 14.9667 22.7796 14.9574 22.8815C14.9204 23.2222 14.9834 23.5704 15.1445 23.887C15.4556 24.5185 16.1 24.913 16.7963 24.913H19.3889V22.8889H16.8259C16.6945 22.8889 16.6167 22.737 16.6926 22.6296C16.7204 22.587 16.7519 22.5426 16.7852 22.4926C17.0278 22.1482 17.3741 21.613 17.7185 21.0037C17.9537 20.5926 18.1815 20.1537 18.3648 19.713C18.4019 19.6333 18.4315 19.5518 18.4611 19.4722C18.5111 19.3315 18.563 19.2 18.6 19.0685C18.6371 18.9574 18.6667 18.8407 18.6963 18.7315C18.7834 18.3574 18.8204 17.9611 18.8204 17.55C18.8204 17.3889 18.813 17.2204 18.7982 17.0593C18.7908 16.8833 18.7685 16.7074 18.7463 16.5315C18.7315 16.3759 18.7037 16.2222 18.6741 16.0611C18.6371 15.8259 18.5852 15.5926 18.5259 15.3574L18.5056 15.2685C18.4611 15.1074 18.4241 14.9537 18.3723 14.7926C18.2259 14.287 18.0574 13.7944 17.8797 13.3333C17.8148 13.15 17.7408 12.9741 17.6667 12.7982C17.5574 12.5333 17.4463 12.2926 17.3445 12.0648C17.2926 11.9611 17.2482 11.8667 17.2037 11.7704C17.1537 11.6611 17.1019 11.5518 17.05 11.4482C17.013 11.3685 16.9704 11.2944 16.9408 11.2204L16.6241 10.6352C16.5797 10.5556 16.6537 10.4611 16.7408 10.4852L18.7223 11.0222H18.7278C18.7315 11.0222 18.7334 11.0241 18.7352 11.0241L18.9963 11.0963L19.2834 11.1778L19.3889 11.2074V10.0296C19.3889 9.4611 19.8445 9 20.4074 9C20.6889 9 20.9445 9.11482 21.1278 9.30184C21.3111 9.4889 21.4259 9.74445 21.4259 10.0296V11.7778L21.6371 11.837C21.6537 11.8426 21.6704 11.85 21.6852 11.8611C21.7371 11.9 21.8111 11.9574 21.9056 12.0278C21.9796 12.087 22.0593 12.1593 22.1556 12.2333C22.3463 12.387 22.5741 12.5852 22.8241 12.813C22.8908 12.8704 22.9556 12.9296 23.0148 12.9889C23.3371 13.2889 23.6982 13.6407 24.0426 14.0296C24.1389 14.1389 24.2334 14.25 24.3296 14.3667C24.4259 14.4852 24.5278 14.6018 24.6167 14.7185C24.7334 14.8741 24.8593 15.0352 24.9685 15.2037C25.0204 15.2833 25.0797 15.3648 25.1297 15.4444C25.2704 15.6574 25.3945 15.8778 25.513 16.0982C25.563 16.2 25.6148 16.3111 25.6593 16.4204C25.7908 16.7148 25.8945 17.0148 25.9611 17.3148C25.9815 17.3796 25.9963 17.45 26.0037 17.513V17.5278C26.0259 17.6167 26.0334 17.7111 26.0408 17.8074C26.0704 18.1148 26.0556 18.4222 25.9889 18.7315C25.9611 18.863 25.9241 18.987 25.8796 19.1185C25.8352 19.2444 25.7908 19.3759 25.7334 19.5C25.6223 19.7574 25.4908 20.0148 25.3352 20.2556C25.2852 20.3444 25.2259 20.4389 25.1667 20.5278C25.1019 20.6222 25.0352 20.7111 24.9759 20.7982C24.8945 20.9093 24.8074 21.0259 24.7185 21.1296C24.6389 21.2389 24.5574 21.3482 24.4685 21.4444C24.3445 21.5907 24.2259 21.7296 24.1019 21.863C24.0278 21.95 23.9482 22.0389 23.8667 22.1185C23.7871 22.2074 23.7056 22.287 23.6315 22.3611C23.5074 22.4852 23.4037 22.5815 23.3167 22.6611L23.113 22.8482C23.0834 22.8741 23.0445 22.8889 23.0037 22.8889H21.4259V24.913H23.4111C23.8556 24.913 24.2778 24.7555 24.6185 24.4667C24.7352 24.3648 25.2445 23.9241 25.8463 23.2593C25.8667 23.237 25.8926 23.2204 25.9223 23.213L31.4056 21.6278C31.5074 21.5982 31.6111 21.6759 31.6111 21.7833Z'
      fill='currentColor'
    />
  </SvgIcon>
);

export default OpenSeaIcon;
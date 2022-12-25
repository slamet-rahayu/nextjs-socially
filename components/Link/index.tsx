/* eslint-disable react/require-default-props */
import React from 'react';

interface IProps {
  href?: string;
  children?: React.ReactNode;
  onClick?: () => {};
}

const CLink = React.forwardRef(({ href, children, onClick }: IProps, ref: any) => {
  return (
    <a onClick={onClick} href={href} ref={ref}>
      {children}
    </a>
  );
});

export default CLink;

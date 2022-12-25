import { ReactElement, ReactNode } from 'react';
import styles from 'styles/calculator.module.scss';

type TBtnVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning';

interface IButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: TBtnVariant;
}

export default function Button({ children, onClick, variant }: IButtonProps): ReactElement {
  let classVariant = '';
  switch (variant) {
    case 'primary':
      classVariant = styles.btn_primary;
      break;
    case 'secondary':
      classVariant = styles.btn_secondary;
      break;
    case 'success':
      classVariant = styles.btn_success;
      break;
    case 'danger':
      classVariant = styles.btn_danger;
      break;
    case 'warning':
      classVariant = styles.btn_warning;
      break;
    default:
      classVariant = styles.btn_primary;
      break;
  }
  return (
    <button type="button" onClick={onClick} className={`${styles.btn} ${classVariant}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  onClick: () => {},
  variant: 'primary'
};

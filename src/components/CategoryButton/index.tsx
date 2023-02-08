import { ReactNode } from 'react';
import styles from './CategoryButton.module.scss';

interface CategoryButtonProps {
  children: ReactNode;
  isActive?: boolean;
  onClick: () => void;
}

export function CategoryButton({
  children,
  isActive,
  onClick,
}: CategoryButtonProps) {
  return (
    <button
      className={
        isActive ? `${styles.button} ${styles.active}` : `${styles.button}`
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}

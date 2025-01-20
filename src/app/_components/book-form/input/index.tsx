import React, { forwardRef } from 'react';
import styles from './styles.module.css';
import { DataPickerIcon } from '../../icons';
interface CustomInputProps {
  value?: string;
  onClick?: () => void;
}

const Input = forwardRef<HTMLButtonElement, CustomInputProps>(
  ({ value, onClick }, ref) => (
    <button
      onClick={onClick}
      ref={ref}
      className={styles.inputDatePicker}
      type="button"
    >
      <span>{value || 'Выберите дату'}</span> <DataPickerIcon />
    </button>
  ),
);

Input.displayName = 'Input';

export default Input;

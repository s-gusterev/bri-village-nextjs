'use client';

// import clsx from 'clsx';
// import { InputHTMLAttributes, forwardRef } from 'react';
// import { IMaskInput } from 'react-imask';

// import styles from './styles.module.css';

// interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
//   error?: string;
//   className?: string;
//   mask?: string;
// }

// const Input = forwardRef<HTMLInputElement, InputProps>(
//   ({ error, mask, className, ...props }, ref) => {
//     return (
//       <div className={styles.inputWrapper}>
//         {mask ? (
//           <IMaskInput
//             {...props}
//             mask={mask}
//             className={clsx(
//               styles.input,
//               error && styles.inputError,
//               className,
//             )}
//             inputRef={ref} // Правильная передача ref в IMaskInput
//           />
//         ) : (
//           <input
//             {...props}
//             ref={ref}
//             className={clsx(
//               styles.input,
//               error && styles.inputError,
//               className,
//             )}
//           />
//         )}

//         {error && <span className={styles.error}>{error}</span>}
//       </div>
//     );
//   },
// );

// Input.displayName = 'Input';

// export default Input;

'use client';

import clsx from 'clsx';
import { InputHTMLAttributes, forwardRef } from 'react';

import styles from './styles.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, ...props }, ref) => {
    return (
      <div className={styles.inputWrapper}>
        <input
          {...props}
          ref={ref}
          className={clsx(styles.input, error && styles.inputError, className)}
        />

        {error && <span className={styles.error}>{error}</span>}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;

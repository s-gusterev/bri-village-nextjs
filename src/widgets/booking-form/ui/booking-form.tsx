'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { useForm, Controller } from 'react-hook-form';
import { IMaskInput } from 'react-imask';

import styles from './styles.module.css';
import Button from '@/shared/ui/button';
import Input from '@/shared/ui/input/';

type FormData = {
  name: string;
  phone: string;
};

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Преобразуем номер в нужный формат перед отправкой на сервер
    const formattedPhone = data.phone.replace(/[^\d+]/g, '');
    console.log('Formatted Phone:', formattedPhone); // Проверка правильности преобразования

    // Далее отправляем данные на сервер
    console.log('Form Data:', { ...data, phone: formattedPhone });
  };
  return (
    <div className={styles.bookingForm}>
      <h2 className={styles.title}>Забронировать домик</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Как вас зовут?"
          type="text"
          className={styles.input}
          {...register('name', { required: 'Введите имя' })}
          error={errors.name?.message}
        />
        <div className={styles.inputPhoneWrapper}>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: 'Введите номер телефона',
              pattern: {
                value: /^\+7 \(\d{3}\) \d{3} \d{2} \d{2}$/,
                message: 'Неверный формат номера телефона',
              },
            }}
            render={({ field }) => (
              <IMaskInput
                mask="+{7} (000) 000 00 00"
                placeholder="+7 (___) ___ __ __"
                type="tel"
                value={field.value}
                onAccept={(value) => {
                  field.onChange(value);
                }}
                onFocus={() => {
                  if (!field.value) {
                    field.onChange('+7 (');
                  }
                }}
                className={clsx(
                  styles.inputPhone,
                  errors.phone && styles.inputPhoneError,
                )}
              />
            )}
          />
          {errors.phone && (
            <span className={styles.error}>{errors.phone?.message}</span>
          )}
        </div>

        <Button size="normal" type="submit" className={styles.button}>
          <span>Забронировать</span>
        </Button>
        <p className={styles.text}>
          Оставляя заявку Вы принимаете условия
          <Link href="#"> соглашения </Link>
          об обработке персональных данных
        </p>
      </form>
    </div>
  );
};

export default BookingForm;

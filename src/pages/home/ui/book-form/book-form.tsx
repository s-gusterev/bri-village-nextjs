'use client';
import 'react-datepicker/dist/react-datepicker.css';

import { ru } from 'date-fns/locale/ru';
import { useState } from 'react';
import DatePicker, {
  ReactDatePickerCustomHeaderProps,
  registerLocale,
} from 'react-datepicker';

import styles from './styles.module.css';
import InputDate from '@/pages/home/ui/book-form/input';
import Selected from '@/pages/home/ui/book-form/select';
import Button from '@/shared/ui/button';
import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/ui/icons';

registerLocale('ru', ru);

const BookForm = () => {
  const [startSelectedDate, setStartSelectedDate] = useState<Date | null>(null);
  const [endSelectedDate, setEndSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedAdults, setSelectedAdults] = useState<string[]>([]);

  const handleChangeForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(startSelectedDate, endSelectedDate, selectedAdults);
  };

  const handleStartDateChange = (date: Date | null) => {
    setStartSelectedDate(date);
    if (date && endSelectedDate && date > endSelectedDate) {
      setEndSelectedDate(null);
    }
  };

  const getVisibleRange = (): Date[] => {
    if (!startSelectedDate || !endSelectedDate) return [];
    const range: Date[] = [];
    const currentDate = new Date(startSelectedDate);

    while (currentDate <= endSelectedDate) {
      if (
        currentDate.getMonth() === currentMonth.getMonth() &&
        currentDate.getFullYear() === currentMonth.getFullYear()
      ) {
        range.push(new Date(currentDate));
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return range;
  };

  const optionsSelect = [
    { value: '1', label: '1 взрослый' },
    { value: '2', label: '2 взрослых' },
    { value: '3', label: '3 взрослых' },
    { value: '4', label: '4 взрослых' },
    { value: '5', label: '5 взрослых' },
  ];

  const CustomHeader = ({
    date,
    decreaseMonth,
    increaseMonth,
  }: ReactDatePickerCustomHeaderProps) => {
    const currentDate = new Date();
    const isPrevDisabled =
      date.getMonth() <= currentDate.getMonth() &&
      date.getFullYear() <= currentDate.getFullYear();
    return (
      <div className={styles.customHeader}>
        <button
          onClick={() => {
            decreaseMonth();
            setCurrentMonth(new Date(date.setMonth(date.getMonth())));
          }}
          disabled={isPrevDisabled}
        >
          <ArrowLeftIcon />
        </button>
        <div>
          <div className={styles.customHeaderMonth}>
            {date.toLocaleString('default', { month: 'long' })}
          </div>
          <div className={styles.customHeaderYear}>{date.getFullYear()}</div>
        </div>
        <button
          onClick={() => {
            increaseMonth();
            setCurrentMonth(new Date(date.setMonth(date.getMonth())));
          }}
        >
          <ArrowRightIcon />
        </button>
      </div>
    );
  };

  return (
    <div className={styles.bookForm}>
      <h2 className={styles.title}>Забронировать домик</h2>
      <form className={styles.form} onSubmit={handleChangeForm}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Заезд</label>
          <DatePicker
            selected={startSelectedDate}
            onChange={handleStartDateChange}
            selectsStart
            startDate={startSelectedDate}
            endDate={endSelectedDate}
            dateFormat="dd.MM.yyyy"
            locale={ru}
            customInput={<InputDate />}
            id="start-date"
            minDate={new Date()}
            renderCustomHeader={(props) => <CustomHeader {...props} />}
            highlightDates={[
              {
                'react-datepicker__highlighted-range': getVisibleRange(),
              },
            ]}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Выезд</label>
          <DatePicker
            selected={endSelectedDate}
            onChange={(date) => setEndSelectedDate(date)}
            selectsEnd
            startDate={startSelectedDate}
            endDate={endSelectedDate}
            minDate={startSelectedDate !== null ? startSelectedDate : undefined}
            dateFormat="dd.MM.yyyy"
            locale={ru}
            customInput={<InputDate />}
            id="end-date"
            renderCustomHeader={(props) => <CustomHeader {...props} />}
            highlightDates={[
              {
                'react-datepicker__highlighted-range': getVisibleRange(),
              },
            ]}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Количество гостей</label>
          <Selected
            options={optionsSelect}
            placeholder="Выберите количество"
            defaultValue={null}
            onChange={(selectedOption) =>
              selectedOption && setSelectedAdults([selectedOption.value])
            }
          />
        </div>
        <Button size="normal" color="dark" type="submit">
          Забронировать
        </Button>
      </form>
    </div>
  );
};

export default BookForm;

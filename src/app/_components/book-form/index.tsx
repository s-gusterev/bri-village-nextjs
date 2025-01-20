'use client';

import { useState } from 'react';
import DatePicker, {
  ReactDatePickerCustomHeaderProps,
  registerLocale,
} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ru } from 'date-fns/locale/ru';
registerLocale('ru', ru);
import styles from './styles.module.css';
import InputDate from './input';
import { ArrowLeftIcon, ArrowRightIcon } from '../icons';

const BookForm = () => {
  const [startSelectedDate, setStartSelectedDate] = useState<Date | null>(null);
  const [endSelectedDate, setEndSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

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
      <form className={styles.form}>
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
      </form>
    </div>
  );
};

export default BookForm;

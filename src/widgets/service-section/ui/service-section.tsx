'use client';
import clsx from 'clsx';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import Selected from './select';
import styles from './styles.module.css';
import { CARDS_SERVICES } from '@/shared/config';
import CardPrimary from '@/shared/ui/card-primary';
import {
  AcUnitIcon,
  HistoryIcon,
  ListIcon,
  NatureIcon,
} from '@/shared/ui/icons';
import { SERVICE_LIST } from '@/widgets/service-section/config/constans';

const BUTTONS = [
  { id: null, label: 'Все', icon: <ListIcon />, className: styles.buttonAll },
  {
    id: 'year',
    label: 'Круглый год',
    icon: <HistoryIcon />,
    className: styles.button,
  },
  {
    id: 'summer',
    label: 'Лето',
    icon: <NatureIcon />,
    className: styles.button,
  },
  {
    id: 'winter',
    label: 'Зима',
    icon: <AcUnitIcon />,
    className: styles.button,
  },
];

const selectOptions = BUTTONS.map(({ id, label }) => ({ value: id, label }));

const ServiceSection = () => {
  const [selectedSeason, setSelectedSeason] = useState<string | null>('year');

  const filteredCards = selectedSeason
    ? CARDS_SERVICES.filter((card) => card.season?.includes(selectedSeason))
    : CARDS_SERVICES;

  const defaultSelectedOption = selectOptions?.find(
    (option) => option.value === selectedSeason,
  );

  return (
    <>
      <div className={styles.buttons}>
        {BUTTONS.map(({ id, label, icon, className }) => (
          <button
            key={id}
            onClick={() => setSelectedSeason(id)}
            className={clsx(
              className,
              id === null && selectedSeason === null && styles.buttonActiveAll,
              id !== null && selectedSeason === id && styles.buttonActive,
            )}
            disabled={selectedSeason === id}
          >
            {icon} {label}
          </button>
        ))}
      </div>
      <div className={styles.selected}>
        <Selected
          options={selectOptions}
          placeholder="Все"
          defaultValue={null}
          onChange={(selectedOption) =>
            selectedOption && setSelectedSeason(selectedOption.value)
          }
          value={defaultSelectedOption || null}
        />
      </div>

      <ul className={styles.list}>
        <AnimatePresence mode="popLayout" initial={false}>
          {filteredCards.map((card) => (
            <li key={card.id}>
              <CardPrimary {...card} />
            </li>
          ))}
        </AnimatePresence>
      </ul>
      <ul className={styles.listGrid}>
        {SERVICE_LIST.map((card) => (
          <li key={card.id} className={styles.listGridItem}>
            <div
              className={styles.listGridItemImage}
              style={{
                backgroundImage: `url(${card.image.src})`,
              }}
            ></div>
            <p className={styles.listGridItemText}>{card.title}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ServiceSection;

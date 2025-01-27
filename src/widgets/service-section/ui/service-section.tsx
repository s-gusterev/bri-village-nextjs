import clsx from 'clsx';
import React, { useState } from 'react';
import styles from './styles.module.css';
import { AnimatePresence } from 'framer-motion';

import { Card } from '@/shared/model';
import {
  AcUnitIcon,
  HistoryIcon,
  ListIcon,
  NatureIcon,
} from '@/shared/ui/icons';
import CardPrimary from '@/shared/ui/card-primary';

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

const ServiceSection = ({ cards }: { cards: Card[] }) => {
  const [selectedSeason, setSelectedSeason] = useState<string | null>(null);

  const filteredCards = selectedSeason
    ? cards.filter((card) => card.season?.includes(selectedSeason))
    : cards;

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

      <ul className={styles.list}>
        <AnimatePresence mode="popLayout" initial={false}>
          {filteredCards.map((card) => (
            <li key={card.id}>
              <CardPrimary {...card} />
            </li>
          ))}
        </AnimatePresence>
      </ul>
    </>
  );
};

export default ServiceSection;

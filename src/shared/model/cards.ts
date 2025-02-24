import { StaticImageData } from 'next/image';

export interface Card {
  title: string;
  id: number;
  image: StaticImageData;
  season?: string[];
}

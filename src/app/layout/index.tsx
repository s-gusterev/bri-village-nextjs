import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Unbounded, Nunito_Sans } from 'next/font/google';
import Header from '@/widgets/header';
import '../styles';
import clsx from 'clsx';

const lato = localFont({
  variable: '--font-family',
  display: 'swap',
  src: [
    {
      path: '../../shared/assets/fonts/lato-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../shared/assets/fonts/lato-medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../shared/assets/fonts/lato-semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../shared/assets/fonts/lato-bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../shared/assets/fonts/lato-bolditalic.woff2',
      weight: '700',
      style: 'italic',
    },

    {
      path: '../../shared/assets/fonts/lato-black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
});

const unbounded = Unbounded({
  variable: '--second-family',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
});

const nunitoSans = Nunito_Sans({
  variable: '--third-family',
  subsets: ['latin', 'cyrillic'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={clsx(lato.variable, unbounded.variable, nunitoSans.variable)}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
